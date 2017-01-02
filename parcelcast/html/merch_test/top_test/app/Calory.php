<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calory extends Model
{
     protected $table = 'calorys';
     protected $fillable = ['id','date','time','description','user_id','amount'];
}
