<?php

namespace App\Traits\Book;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\{ Redis, Mail };
use Predis\Connection\ConnectionException;
use App\Mail\BookAlert;

trait Methods
{

    public function getBooks(): array|\Illuminate\Pagination\Paginator
    {
        $request = request();
        if ($request->method() == 'POST') {
            $filteredData = array_filter($request->all());
            return self::orderBy('created_at', 'DESC')->where(function($query) use($filteredData) {
                foreach ($filteredData as $column => $value) {
                    try {
                        if (\Carbon\Carbon::createFromFormat('Y-m-d', $value) !== false) {
                            $query->where($column, '=', $value);
                        } else {
                            $query->where($column, 'LIKE', '%'.$value.'%');
                        }
                    } catch (\Exception $th) {
                        $query->where($column, 'LIKE', '%'.$value.'%');
                    }
                }
            })->simplePaginate(config('app.BOOK_PAGINATE'));
        }
        $cacheKey = $this->getCacheKey('books:', 'page');
        $cachedData = $this->getDataFromCache($cacheKey);
        if ($cachedData) {
            return $cachedData;
        }
        $bookData = self::orderBy('created_at', 'DESC')->simplePaginate(config('app.BOOK_PAGINATE'));
        $this->addDataIntoCache($cacheKey, $bookData);
        return $bookData;
    }

    public function addBook($request): Model
    {
        $data = $request->all();
        $data = $this->uploadFile($request, $data);
        $this->clearRedis('books:');
        $book = self::create($data);
        try {
            Mail::to($request->user())->send(new BookAlert($book));
        } catch (\Exception $th) {
            // to do on fail
        }
        
        return $book;
    }

    public function updateBook($request, $bookId): bool
    {
        $book = self::find($bookId);
        $data = $request->validated();
        $data = $this->uploadFile($request, $data);
        $this->clearRedis('books:');
        $book->fill($data);
        return $book->save();
    }

    public function uploadFile($request, $data): array
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time().'_'.$image->getClientOriginalName();

            // File upload location
            $location = 'uploads/'.date('FY');

            // Upload file
            $image->move($location, $filename);
            $data['image'] = $location. '/' .$filename;
        }
        return $data;
    }

    public function addDataIntoCache ($cacheKey, $data): bool
    {
        try {
			$isCacheEnabled = config('cache.ENABLE_REDIS');
			if ($isCacheEnabled && $cacheKey) {
				$minutes = config('cache.REDIS_EXPIRE_TIME');
				Redis::setex($cacheKey, $minutes*60, json_encode($data));
			}
            return true;
		} catch (ConnectionException $e) {
			return false;
		}
	}

	/**
	 * Get saved Plan listing
	 * Author: Sandeep Bangarh
	*/
	public function getDataFromCache ($cacheKey): bool|array
    {
		try {
			$isCacheEnabled = config('cache.ENABLE_REDIS');
			if ($isCacheEnabled && $cacheKey) {
				$listing = Redis::get($cacheKey);
				if ($listing) {
					return json_decode($listing, true);
				}
			}

			return false;
		} catch (ConnectionException $e) {
			return false;
		}
	}

	public function getCacheKey($prefix, $suffix, $ignoreValues=[]): string
	{
        $request = request();
		$data = !in_array('request', $ignoreValues)?$request->all():[];
		$cacheKey = $prefix;

		foreach ($data as $key => $value) {
			if (is_array($value)) {
				foreach ($value as $vl) {
					$cacheKey .= $vl."_";
				}
			} else {
				if (!in_array($key, $ignoreValues)) {
					$cacheKey .= $value."_";
				}
			}
		}
		
		return $cacheKey.$suffix;
	}

    public function clearRedis($key)
    {
        $keyData = Redis::keys($key.'*');
        foreach($keyData as $dt) {
            $cacheKey = str_replace(config('database.redis.options.prefix'),"", $dt);
            Redis::del($cacheKey);
        }
    }

}