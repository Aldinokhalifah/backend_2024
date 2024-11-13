<?php

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\EmployeeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route Students
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/student', [StudentController::class, 'index']);
    Route::post('/student', [StudentController::class, 'store']);
    Route::put('/student/{id}', [StudentController::class, 'update']);
    Route::delete('/student/{id}', [StudentController::class, 'delete']);
    Route::get('/student/{id}', [StudentController::class, 'show']);
});

// Route Register dan Login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//  Route Employee
Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/employees', [EmployeeController::class, 'store']);
Route::get('/employees/{id}', [EmployeeController::class, 'show']);
Route::put('/employees/{id}', [EmployeeController::class, 'update']);
Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);
