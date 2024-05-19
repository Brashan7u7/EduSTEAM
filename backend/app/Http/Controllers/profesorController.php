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

    public function getProfesor($id){
        $profesor = profesor::find($id);
        if(!$profesor){
            return response()->json(['message' => 'Profesor no encontrado'], 404);
        }
        return response()->json($profesor, 200);
    }

    public function deleteProfesor($id){
        $profesor = profesor::find($id);
        if(!$profesor){
            return response()->json(['message' => 'Profesor no encontrado'], 404);
        }
        $profesor->delete();
        return response()->json(['message' => 'Profesor eliminado'], 200);
    }

    public function updateProfesor(request $request, $id){
        $profesor = profesor::find($id);
        if(!$profesor){
            return response()->json(['message' => 'Profesor no encontrado'], 404);
        }
        $profesor->update($request->all());
        return response()->json($profesor, 200);
    }
}
