## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

## Tech Stacks used

 - Laravel 10
 - Inertia js
 - Vue 3
 - Redis


 ## Installation steps

``` bash
 - git clone https://github.com/sanbangarh309/bookStore.git
 - mv .env.example .env
 - composer install
 - install redis server based on your OS
 - create database and change crdentials from .env file
 - php artisan key:generate
 - php artisan migrate
 - npm i (if not work try with root user)
 - npm run dev
 - php artisan serve (i'm using valet so i usually use virtual host)
 - For receiving email alert, please add correct SMTP or other provider's detail and change queue connection to redis or database for adding jobs in queues.
 ```

 Note - Run it in browser and first you need to create account then you can see all functionality.