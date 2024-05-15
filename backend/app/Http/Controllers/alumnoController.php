<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\alumno;

class alumnoController extends Controller{
    public function saveAlumno(Request $request){
        $alumno = alumno::create()
    }
}