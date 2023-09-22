<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login']);

Route::post('singup', [AuthController::class, 'singup']);

Route::post('reset-password', [AuthController::class, 'resetPassword']);

Route::middleware('auth:sanctum')->group(function () {

    /* AuthController ===== modal Users */
    Route::controller(AuthController::class)->group(function () {
        //logout für Auth
        Route::post('logout', 'logout');
        //show profile für Auth
        Route::get('profile', 'profile');
        //update profile für Auth
        Route::post('upProfile', 'updateProfile');
        //Refresh token für Auth
        Route::post('refresh-token', 'RefreshToken');
        //set online user when login für Auth
        Route::post('setOnline', 'setOnline');
    });

    /* UserController ===== modal Users */
    Route::controller(UsersController::class)->group(function () {
        //get all users und Paganation
        Route::get('users', 'users');
        //get eins user
        Route::get('user/{id}', 'user');
        //update user
        Route::post('user/{id}/up', 'update');
        //delete user
        Route::delete('user/{id}', 'delete');
        //get users online
        Route::get('users/online', 'online');
        //set user is offline
        Route::post('setOffline', 'setOffline');
    });


    /* CategorisController */


    /* WorksController */

    /* MovesController */

    /* RolesController */

    /* ParmasionsController */
});
