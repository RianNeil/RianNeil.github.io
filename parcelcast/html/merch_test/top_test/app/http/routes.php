<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'api'], function() {
    Route::post('login', 'Api\AuthController@login');
    Route::post('register','Api\AuthController@register');

    Route::group(['middleware' => ['jwt.auth']], function() {
        Route::resource('calory', 'Api\CaloryController');
        Route::resource('caloryAmount', 'Api\CaloryAmountController');
        Route::resource('user', 'Api\UserController');
        Route::get('filter','Api\CaloryController@filter');
    });
});
