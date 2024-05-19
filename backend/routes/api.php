<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usuariosController;

Route::post('register',[UsuariosController::class,'register']);
Route::post('login',[UsuariosController::class,'login']);




