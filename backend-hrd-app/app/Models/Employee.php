<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';
    // Memasukkan nama table yang dapat diisi
    protected $fillable = ['name', 'gender', 'phone', 'address', 'email', 'status', 'hired_on'];
}
