<?php

// Mengimpor model Employee, Request dari Illuminate, dan Route dari Laravel
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Mengimpor kontroler yang diperlukan
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;

// Route untuk mendapatkan informasi pengguna yang sedang login
Route::get('/user', function (Request $request) {
    // Mengembalikan data pengguna saat ini
    return $request->user();
})->middleware('auth:sanctum'); // Menggunakan middleware 'auth:sanctum' untuk memastikan pengguna terautentikasi

// Route untuk manajemen Employee
Route::middleware('auth:sanctum')->group(function() {
    
    // Mendapatkan semua data karyawan
    Route::get('/employees', [EmployeeController::class, 'index']);
    
    // Menambahkan karyawan baru
    Route::post('/employees', [EmployeeController::class, 'store']);
    
    // Mendapatkan detail karyawan berdasarkan ID
    Route::get('/employees/{id}', [EmployeeController::class, 'show']);
    
    // Memperbarui data karyawan berdasarkan ID
    Route::put('/employees/{id}', [EmployeeController::class, 'update']);
    
    // Menghapus karyawan berdasarkan ID
    Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);
    
    // Mencari karyawan berdasarkan nama
    Route::get('/employees/search/{name}', [EmployeeController::class, 'search']);
    
    // Mendapatkan semua karyawan dengan status 'active'
    Route::get('/employees/status/active', [EmployeeController::class, 'active']);
    
    // Mendapatkan semua karyawan dengan status 'inactive'
    Route::get('/employees/status/inactive', [EmployeeController::class, 'inactive']);
    
    // Mendapatkan semua karyawan dengan status 'terminated'
    Route::get('/employees/status/terminated', [EmployeeController::class, 'terminated']);
});

// Route untuk registrasi dan login
Route::post('/register', [AuthController::class, 'register']); // Endpoint untuk registrasi pengguna baru
Route::post('/login', [AuthController::class, 'login']); // Endpoint untuk login pengguna