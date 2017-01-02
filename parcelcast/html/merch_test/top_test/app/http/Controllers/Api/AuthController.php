<?php

namespace App\Http\Controllers\Api;

use App\User;
use Validator;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller {

    /**
     * API Login, on success return JWT Auth token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['result' => 'fail'],200);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['result' => 'fail'],200);
        }

        $user = User::where('email',$credentials['email'])->first(); 
        return response()->json(['result'=>'success','token'=>$token,'role'=>$user->role]);	
    }
    public function register(Request $request)
    {
        $param = $request->only('firstname','lastname','email','password');
    	$validate = Validator::make($param, [
            'email' => 'unique:users',
        ]);

        if($validate->fails())
        {
        	return response()->json(['result' => 'duplicate'], 200);
        }
        
        if(User::create([
            'firstname' => $param['firstname'],
            'lastname' => $param['lastname'],
            'email' => $param['email'],
            'password' => bcrypt($param['password']),
        ]))
        {
        	return response()->json(['result' => 'success'], 200);	
        }
        else
        {
        	return response()->json(['result' => 'fail'], 200);
        }
    }
    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     * 
     * @param Request $request
     */
    public function logout(Request $request) {
        $this->validate($request, [
            'token' => 'required' 
        ]);
        
        JWTAuth::invalidate($request->input('token'));
    }
}