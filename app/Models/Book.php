<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\Book\ { Accessor, Methods };

class Book extends Model
{
    use Accessor, Methods, HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'title',
        'author',
        'genre',
        'description',
        'image',
        'published',
        'publisher',
        'isbn',
        'genre'
    ];
}
