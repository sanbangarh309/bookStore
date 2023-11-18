<?php
 
 namespace App\Traits\Book;
 
use Illuminate\Database\Eloquent\Casts\Attribute;
 
trait Accessor
{
    /**
     * Get the user's first name.
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url($value),
        )->shouldCache();
    }
}