<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Calory;

use Input;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class CaloryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();
        $calories = Calory::where('user_id',$user->id)->orderBy('id','desc')->get();
        return response()->json(['result' => 'success', 'data' => $calories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $param = $request->only('date','time','description','amount');
        $param['user_id'] = $user->id;
        
        if(Calory::create($param))
        {
            return response()->json(['result'=>'success'],200);       
        }
        else
        {
            return response()->json(['result'=>'fail'],200);      
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
        $param = $request->only('date','time','description','amount');
        if(Calory::where('id',$id)->update($param))
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
        $calory = Calory::find($id);
        if($calory->delete())
        {
            return response()->json(['result'=>'success'],200);       
        }
        else
        {
            return response()->json(['result'=>'fail'],200);      
        }
    }
    public function filter()
    {
        $input = Input::all();
        $user = JWTAuth::parseToken()->authenticate();
        $calories = Calory::where('user_id','=',$user->id)->
                    where('date','>=',$input['from_date'])->
                    where('date','<=',$input['to_date'])->
                    where('time', '>=', $input['from_hour'])->
                    where('time', "<=", $input['to_hour'])->get();

        return response()->json(['result' => 'success', 'data' => $calories],200);
    }
}
