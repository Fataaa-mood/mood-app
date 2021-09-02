<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'equipo_id',
        'impostor',
    ];

    public function users(){
        return $this->hasMany(User::class);
    }
}
