<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Grupo;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['name' => 'Admin', 'email' =>'admin@gmail.com','is_admin' => true]);
        User::factory()->create(['name' => 'Anya', 'email' =>'anya@gmail.com','is_admin' => true]);
        

        Grupo::factory(5)->create();
    }
}
