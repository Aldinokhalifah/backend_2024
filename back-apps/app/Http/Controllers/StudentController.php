<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index() {
        // melihat data
        $student = student::all(); //menggunakan eloquent

        $data = [
            'message' => 'Berhasil akses data',
            'data' => $student
        ];
        return response()->json($data, 200); 
    }

    public function store(Request $request) {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Data berhasil ditambah',
            'data' => $student
        ];
        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        
        $student = Student::find($id);
    
        if(!$student) {
            return response()->json([
                'message' => "Id $id not found"
            ], 404);
        }

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student->update($input);

        $data = [
            'message' => "Data dengan Id $id berhasil diupdate",
            'data' => $student
        ];
        return response()->json($data, 200);
    }
    
    public function delete(Request $request, $id) {
        $student = Student::find($id);

        if(!$student) {
            return response()->json([
                'message' => "Data dengan Id $id tidak ditemukan"
            ], 404);
        }

        $student->delete($student);

        $data = [
            'message' => "Data dengan Id $id telah dihapus",
            'data' => $student
        ];
        return response()->json($data, 200);
    }
}
