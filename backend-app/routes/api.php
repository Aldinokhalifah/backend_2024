<?php

use App\Http\Controllers\AnimalsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/animals', [AnimalsController::class, 'index']);
Route::post('/animals/{nama_hewan}', [AnimalsController::class, 'store']);
Route::put('/animals/{id}/{nama_hewan}', [AnimalsController::class, 'update']);
Route::delete('/animals/{id}', [AnimalsController::class, 'delete']);