<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Validator;
use Input;
use App\User;
use App\Calory;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json(['result'=>'success','data'=>$users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $param = $request->only('firstname','lastname','email','password','role');

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
            'role' => $param['role'],
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {  
        $param = $request->only('firstname','lastname','email','password','role');
        $param['password'] = bcrypt($param['password']);
        if(User::find($id)->update($param))
        {
            return response()->json(['result'=>'success'],200);       
        }
        else
        {
            return response()->json(['result'=>'fail'],200);      
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $user = User::find($id);

        $calorys = Calory::where('user_id',$user->id)->delete();

        if($user->delete())
        {
            return response()->json(['result'=>'success'],200);       
        }
        else
        {
            return response()->json(['result'=>'fail'],200);      
        }
    }
}
