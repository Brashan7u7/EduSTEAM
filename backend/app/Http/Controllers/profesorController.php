<?php

namespace App\Http\Controllers;

use App\Models\profesor;
use Illuminate\Http\Request;

class profesorController extends Controller
{
    public function saveProfesor(request $request){
        $profesor = profesor::create($request->all());
        return response()->json($profesor,200);
    }
    public function getProfesores(){
        $profesores = profesor::all();
        return response()->json($profesores, 200);
    }
}
