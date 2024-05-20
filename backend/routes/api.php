<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usuariosController;
use App\Http\Controllers\actividadController;

Route::post('register',[UsuariosController::class,'register']);
Route::post('login',[UsuariosController::class,'login']);




Route::controller(actividadController::class)-> group(function(){
    Route::get('/actividad', 'getActividad');
    Route::get('/actividad/{id}', 'getActividades');
    Route::post('/actividad', 'saveActividad');
    Route::put('/actividades/{id}', 'updateActividad');
    Route::delete('/actividad/{id}', 'deleteActividad');
});