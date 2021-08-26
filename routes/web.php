<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signin', function () {
    return view('signin');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/selection', function () {
    return view('selection');
});

Route::get('/intro', function () {
    return view('intro');
});

Route::get('/characters', function () {
    return view('characters');
});

Route::get('/stages', function () {
    return view('stages');
});


require __DIR__.'/auth.php';
