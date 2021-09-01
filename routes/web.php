<?php

use App\Http\Controllers\AuthController;
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

Route::any('{all}', function () {
    return view('welcome');
})->where(['all' => '.*']);

Route::prefix("auth")->group(function(){
    Route::get("init", "App\Http\Controllers\AuthController@init");
    Route::post("login", "App\Http\Controllers\AuthController@login");
});

// Route::get('/signin', function () {
//     return view('signin');
// });

// Route::get('/signup', function () {
//     return view('signup');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

Route::get('/selection', function () {
    return view('selection');
});

// Route::get('/intro', function () {
//     return view('intro');
// });

// Route::get('/characters', function () {
//     return view('characters');
// });

// Route::get('/stages', function () {
//     return view('stages');
// });
// Route::get('/map', function () {
//     return view('map');
// });

// Route::get('/map', function () {
//     return view('map');
// });


require __DIR__.'/auth.php';
