<?php

use App\Http\Controllers\ { BookController, ProfileController };
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\ { Route, Artisan };
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',  function () {
    abort(404);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => ['auth'], 'prefix' => 'books'], function ()
{
    Route::match(['get', 'post'], '/', [BookController::class, 'index'])->name('books.list');
    Route::get('/add', [BookController::class, 'add'])->name('books.add');
    Route::post('/add', [BookController::class, 'store'])->name('books.add.post');
    Route::get('/edit/{id}', [BookController::class, 'edit'])->name('books.edit');
    Route::post('/edit/{id}', [BookController::class, 'update'])->name('books.update');
    Route::post('/{id}/status', [BookController::class, 'changeStatus'])->name('books.status');
});

Route::get('files/{directory}/{period}/{image}', function ($directory, $period, $image) {
    $path = $directory;
    if ($period) {
        $path .= '/' .$period;
    }
    if ($image) {
        $path .= '/' .$image;
    }
    
	return getFile($path);
});

Route::get('files/{directory}/{image}', function ($directory, $image) {
    $path = $directory;
    if ($image) {
        $path .= '/' .$image;
    }
    
	return getFile($path);
});

require __DIR__.'/auth.php';
