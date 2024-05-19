<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function register(Request $request) {
        $usuarios=new  Usuarios();
        $usuarios->nombre = $request->input('nombre');
        $usuarios->email = $request->input('email');
        $usuarios->password = Hash::make($request->input('password'));
        $usuarios->rol = $request->input('rol');
        $usuarios->save();
        return $usuarios;
    }
    public function login(Request $request){
        $usuarios=Usuarios::where('email',$request->email)->first();
        if(!$usuarios || !Hash::check($request->password,$usuarios->password)){
            return ["error"=>"Email o contraseña no coinciden"];
        }
        return $usuarios;
    }
}
