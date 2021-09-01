<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(1)->create([
            'id' => 1,
            'userName' => 'pepito de la calzada',
            'email' => 'pepitodelacalzada@gmail.com',
            'password' => bcrypt('123456'),
        ]); 
    }
}
