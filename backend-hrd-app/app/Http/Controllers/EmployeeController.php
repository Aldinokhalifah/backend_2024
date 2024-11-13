<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    // Menampilkan semua data employees
    public function index() {
        // Mengambil semua data dari tabel employees
        $employees = Employee::all();

        if ($employees->isEmpty()) {
            // Mengembalikan response jika data employees kosong
            return response()->json([
                'message' => 'Data tidak ada',
                'data' => []
            ], 200);
        } else {
            // Mengembalikan response jika data employees berhasil diambil
            return response()->json([
                'message' => 'Berhasil akses data',
                'data' => $employees
            ], 200);
        }
    }

    // Menyimpan data baru ke dalam tabel employees
    public function store(Request $request) {
        // Validasi input data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'gender' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'email' => 'email|required',
            'status' => 'required',
            'hired_on' => 'date|required',
        ]);

        // Jika validasi gagal, kembalikan response dengan error
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        // Menyimpan data yang sudah divalidasi ke dalam tabel employees
        $employee = Employee::create($request->all());

        $data = [
            'message' => 'Employee is created successfully',
            'data' => $employee,
        ];

        // Mengembalikan response berhasil menyimpan data
        return response()->json($data, 201);
    }

    // Menampilkan data employee berdasarkan id
    public function show(Request $request, $id) {
        // Mencari employee berdasarkan id
        $employee = Employee::find($id);

        if ($employee) {
            // Mengembalikan response jika data ditemukan
            $data = [
                'message' => 'Get detail data',
                'data' => $employee
            ];
            return response()->json($data, 200);
        } else {
            // Mengembalikan response jika data tidak ditemukan
            $data = [
                'message' => "Data dengan Id $id tidak ditemukan",
                'data' => null
            ];
            return response()->json($data, 404);
        }
    }

    // Mengupdate data employee berdasarkan id
    public function update(Request $request, $id) {
        // Mencari employee berdasarkan id
        $employee = Employee::find($id);
    
        if (!$employee) {
            // Mengembalikan response jika id tidak ditemukan
            return response()->json([
                'message' => "Id $id tidak ditemukan"
            ], 404);
        }
    
        // Validasi input data untuk update
        $validatedData = $request->validate([
            'name' => 'required',
            'gender' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'email' => 'email|required',
            'status' => 'required',
            'hired_on' => 'date|required',
        ]);
    
        // Mengupdate data employee dengan data yang sudah divalidasi
        $employee->update($validatedData);
    
        // Mengembalikan response berhasil mengupdate data
        return response()->json([
            'message' => "Data dengan Id $id berhasil diupdate",
            'data' => $employee
        ], 200);
    }

    // Menghapus data employee berdasarkan id
    public function destroy(Request $request, $id) {
        // Mencari employee berdasarkan id
        $employee = Employee::find($id);

        if (!$employee) {
            // Mengembalikan response jika id tidak ditemukan
            return response()->json([
                'message' => "Data dengan Id $id tidak ditemukan"
            ], 404);
        } else {
            // Menghapus data employee yang ditemukan
            $employee->delete();

            $data = [
                'message' => "Data dengan Id $id telah dihapus",
                'data' => $employee
            ];
            return response()->json($data, 200);
        }
    }

    // Mencari data employee berdasarkan nama
    public function search(Request $request, $name) {
        // Mencari employee berdasarkan nama
        $employee = Employee::where('name', $name)->first();
        
        if ($employee) {
            // Mengembalikan response jika data ditemukan
            $data = [
                'message' => 'Get detail data',
                'data' => $employee
            ];
            return response()->json($data, 200);
        } else {
            // Mengembalikan response jika data tidak ditemukan
            $data = [
                'message' => "Data dengan nama $name tidak ditemukan",
                'data' => null
            ];
            return response()->json($data, 404);
        }
    }

    // Menampilkan semua data employees dengan status aktif
    public function active(Request $request) {
        // Mencari semua employee dengan status 'active'
        $employees = Employee::where('status', 'active')->get();
        $count = $employees->count();
        
        if ($employees->isNotEmpty()) {
            // Mengembalikan response jika data ditemukan
            $data = [
                'message' => 'Get detail data',
                'total' => $count,
                'data' => $employees
            ];
            return response()->json($data, 200);
        } else {
            // Mengembalikan response jika data tidak ditemukan
            $data = [
                'message' => "Data dengan status active tidak ditemukan",
                'total' => 0,
                'data' => null
            ];
            return response()->json($data, 404);
        }
    }

    // Menampilkan semua data employees dengan status tidak aktif
    public function inactive(Request $request) {
        // Mencari semua employee dengan status 'inactive'
        $employees = Employee::where('status', 'inactive')->get();
        $count = $employees->count();
        
        if ($employees->isNotEmpty()) {
            // Mengembalikan response jika data ditemukan
            $data = [
                'message' => 'Get detail data',
                'total' => $count,
                'data' => $employees
            ];
            return response()->json($data, 200);
        } else {
            // Mengembalikan response jika data tidak ditemukan
            $data = [
                'message' => "Data dengan status inactive tidak ditemukan",
                'total' => 0,
                'data' => null
            ];
            return response()->json($data, 404);
        }
    }

    // Menampilkan semua data employees dengan status terminated
    public function terminated(Request $request) {
        // Mencari semua employee dengan status 'terminated'
        $employees = Employee::where('status', 'terminated')->get();
        $count = $employees->count();
        
        if ($employees->isNotEmpty()) {
            // Mengembalikan response jika data ditemukan
            $data = [
                'message' => 'Get detail data',
                'total' => $count,
                'data' => $employees
            ];
            return response()->json($data, 200);
        } else {
            // Mengembalikan response jika data tidak ditemukan
            $data = [
                'message' => "Data dengan status terminated tidak ditemukan",
                'total' => 0,
                'data' => null
            ];
            return response()->json($data, 404);
        }
    }
}
