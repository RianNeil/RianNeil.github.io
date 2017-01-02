<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    // public function testBasicExample()
    // {
    //     $this->visit('/')
    //          ->see('Laravel 5');
    // }
    public function testLogin()
    {
         $this->post('/api/login', ['email' => 'admin@admin.com','password' => 'admin'])
             ->seeJson([
                 'result' => 'success',
             ]);
    }
}
