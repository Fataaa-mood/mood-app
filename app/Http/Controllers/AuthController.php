<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SebastianBergmann\Environment\Console;

class AuthController extends Controller
{
    public function init(){
        $user = Auth::user();
        return ["userName"=>$user];
    }

    public function login(Request $request){
        if (Auth::attempt(["userName" => $request->userName, "password"=>$request->password])){
            $user = Auth::user();
            
            return redirect()->route('selection');
            
        } 
    }
}
