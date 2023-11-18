<?php

namespace App\Http\Controllers;

use App\Http\Requests\Book\ { BookRequest };
use Inertia\Inertia;
use Inertia\Response;
use App\Models\ { Book };
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class BookController extends Controller
{

    public function __construct(
        protected Book $books
    ) {}
     /**
     * Display the books.
     */
    public function index(): Response
    {
        return Inertia::render('Books/Index', [
            'books' => $this->books->getBooks()
        ]);
    }

    /**
     * store single book's data.
     */
    public function store(BookRequest $request): RedirectResponse
    {
        $this->books->fill($request->validated());
        $book = $this->books->addBook($request);
        return Redirect::route('books.edit', [ 'id' => $book->id ]);
    }

    /**
     * display the single book's view.
     */
    public function add(): Response
    {
        return Inertia::render('Books/Edit', [
            'book' => null
        ]);
    }

    /**
     * update the book's data.
     */
    public function update(BookRequest $request, $id): RedirectResponse
    {
        $this->books->updateBook($request, $id);
        return Redirect::route('books.edit', [ 'id' => $id ]);
    }

    /**
     * Display the book's edit view.
     */
    public function edit($id): Response
    {
        return Inertia::render('Books/Edit', [
            'book' => $this->books->find($id),
        ]);
    }
}
