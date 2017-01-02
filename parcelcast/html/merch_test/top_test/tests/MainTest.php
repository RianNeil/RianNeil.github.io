<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\User;
class MainTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    private $token;
    
    public function testLogin()
    {
        $this->createTestUser();
        $this->post('/api/login', ['email' => 'admin@admin.com','password' => 'admin'])
             ->seeJson([
                 'result' => 'success',
            ]);
        $this->post('/api/login', ['email' => '','password' => ''])
             ->seeJson([
                 'result' => 'fail',
            ]);
    }
    public function testRegister()
    {
        $this->createTestUser();
        $this->post('/api/register', ['email' => 'admin@admin.com','password' => 'admin','firstname'=>'admin','lastname'=>'admin'])
             ->seeJson([
                 'result' => 'duplicate',
        ]);
        $user = User::where('email','admin@admin.com')->first();
        $user->delete();
        $this->post('/api/register', ['email' => 'admin@admin.com','password' => 'admin','firstname'=>'admin','lastname'=>'admin'])
             ->seeJson([
                 'result' => 'success',
        ]);
        
    }
    /////////////   USER CRUD TEST       /////////////////////
    public function testCreateUser()
    {
        $this->getToken();
        $users=User::where('email','admin1@admin1.com')->get();
        if(count($users)!=0)
        {
            $users[0]->delete();
        }
        $this->post('/api/user',['firstname'=>'admin1','lastname'=>'admin1','email'=>'admin1@admin1.com','password'=>'admin1','role'=>'user'],['HTTP_Authorization'=>'Bearer '.$this->token])
             ->seeJson([
                 'result' => 'success',
        ]);
        $this->post('/api/user',['firstname'=>'admin1','lastname'=>'admin1','email'=>'admin1@admin1.com','password'=>'admin1','role'=>'user'],['HTTP_Authorization'=>'Bearer '.$this->token])
             ->seeJson([
                 'result' => 'duplicate',
        ]);
    }
    public function testGetUserList()
    {
        $this->createTestUser();
        $this->getToken();
        $this->get('/api/user',['HTTP_Authorization'=>'Bearer '.$this->token])
             ->seeJson([
                 'result' => 'success',
        ]);
    }
    public function testUpdateUser()
    {
        $this->createTestUser();
        $this->getToken();
        $user=User::where('email','admin@admin.com')->first();
        $this->put('/api/user/'.$user->id,['firstname'=>'admin_test_1','lastname'=>'admin_test_1','email'=>'admin@admin.com','password'=>'admin','role'=>'user'],['HTTP_Authorization'=>'Bearer '.$this->token])
             ->seeJson([
                 'result' => 'success',
        ]);
    }
    public function testDeleteUser()
    {
        $this->createTestUser();
        $this->getToken();
        $user=User::where('email','admin@admin.com')->first();
        $this->delete('/api/user/'.$user->id,[],['HTTP_Authorization'=>'Bearer '.$this->token])
             ->seeJson([
                 'result' => 'success',
        ]);
    }
    /////////////   CALORY CRUD TEST       /////////////////////
   
    public function testUpdateCalory()
    {

    }

    public function testDeleteCalory()
    {

    }

    /////////////   Before function       /////////////////////
    private function createTestUser()
    {
        $user = User::firstOrNew(['email'=>'admin@admin.com']);
        $user->firstname = "admin";
        $user->lastname = "admin";
        $user->calory_amount = 10;
        $user->role = "admin";
        $password = bcrypt('admin');
        $user->save();
    }

    private function createTestCalory()
    {
        $user = User::firstOrNew(['email'=>'admin@admin.com']);
        $param1 = ['date'=>"2016-09-18",'time'=>5,'description'=>'milk','amount'=>10];
        $param2 = ['date'=>"2016-07-18",'time'=>10,'description'=>'milk','amount'=>11];

    }

    private function getToken()
    {
        $response = $this->call('post','/api/login', ['email' => 'admin@admin.com','password' => 'admin']);
        $response = json_decode($response->getContent());
        $this->token = $response->token;
    }
}
