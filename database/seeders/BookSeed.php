<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;


class BookSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $bookData = file_get_contents('./books.json');
        dd($bookData);
        Book::factory()->count(10)
            ->hasCategories(30)
            ->create();
    }
}
