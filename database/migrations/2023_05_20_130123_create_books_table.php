<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Book;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('books')) {
            Schema::create('books', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('user_id')->default(1);
                $table->foreign('user_id')->references('id')->on('users');
                $table->string('title', 255);
                $table->string('author', 255)->nullable();
                $table->string('genre', 255)->nullable();
                $table->text('description')->nullable();
                $table->bigInteger('isbn')->nullable();
                $table->string('image', 255)->nullable();
                $table->timestamp('published', $precision = 0);
                $table->string('publisher', 255)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate()->nullable();
                $table->timestamp('deleted_at')->nullable();
            });
        }

        if (Schema::hasTable('books')) {
            Schema::table('books', function (Blueprint $table) {
                $table->index(['title', 'author', 'genre', 'isbn', 'published']);
            });
        }

        try {
            $bookData = file_get_contents('https://fakerapi.it/api/v1/books?_quantity=100');
            Book::insert(json_decode($bookData, true)['data']);
        } catch (\Throwable $th) {
            $bookData = file_get_contents('./books.json');
            Book::insert(json_decode($bookData, true)['data']);
        }
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
