<?php

use App\Http\Controllers\profesorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
e('auth:sanctum');

Route::controller(profesorController::class)->group(function(){
    Route::post('profesor', 'saveProfesor');
    Route::get('profesores', 'getProfesores');
});



