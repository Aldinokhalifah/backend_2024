<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    public function index() {
        //memanggil data employees
        $employees = Employee::all();

        if ($employees->isEmpty()) {
            //menampilkan hasil jika data kosong
            return response()->json([
                'message' => 'Data tidak ada',
                'data' => []
            ], 404);
        } else {
            //menampilkan hasil jika data berhasil
            return response()->json([
                'message' => 'Berhasil akses data',
                'data' => $employees
            ], 200);
        }
    }

    public function store(Request $request) {
        // validasi untuk input data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'gender' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'email' => 'email|required',
            'status' => 'required',
            'hired_on' => 'date|required',
        ]);

        //cek jika validasi gagal
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $employee = Employee::create($request->all());

        $data = [
            'message' => 'Student is created successfully',
            'data' => $employee,
        ];

        return response()->json($data, 201);
    }

    public function show(Request $request, $id) {
        // mencari id employee
        $emplyoee = Employee::find($id);
        if($emplyoee) {
            // mendapatkan detail data
            $data = [
                'message' => 'Get detail data',
                'data' => $emplyoee
            ];
            return response()->json($data, 200);
        } else{
            $data = [
                'message' => "Data dengan Id $id tidak ditemukan",
                'data' => $emplyoee
            ];
            return response()->json($data, 404);
        }
    }

    public function update(Request $request, $id) {
        // mencari id employee
        $employee = Employee::find($id);
    
        if (!$employee) {
            return response()->json([
                'message' => "Id $id tidak ditemukan"
            ], 404);
        }
    
        $validatedData = $request->validate([
            'name' => 'required',
            'gender' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'email' => 'email|required',
            'status' => 'required',
            'hired_on' => 'date|required',
        ]);
    
        $employee->update($validatedData);
    
        return response()->json([
            'message' => "Data dengan Id $id berhasil diupdate",
            'data' => $employee
        ], 200);
    }

    public function destroy(Request $request, $id) {
        $employee = Employee::find($id);

        if(!$employee) {
            return response()->json([
                'message' => "Data dengan Id $id tidak ditemukan"
            ], 404);
        } else if($employee) {
            $employee->delete($employee);

            $data = [
                'message' => "Data dengan Id $id telah dihapus",
                'data' => $employee
            ];
            return response()->json($data, 200);
        }
    }

    public function search(Request $request, $id) {
        // mencari id employee
        $emplyoee = Employee::find($id);
        if($emplyoee) {
            // mendapatkan detail data
            $data = [
                'message' => 'Get detail data',
                'data' => $emplyoee
            ];
            return response()->json($data, 200);
        } else{
            $data = [
                'message' => "Data dengan Id $id tidak ditemukan",
                'data' => $emplyoee
            ];
            return response()->json($data, 404);
        }
    }
    
}
