<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;


class StudentController extends Controller
{
    public function index() {
        $students = Student::all(); 
    
        if ($students->isEmpty()) {
            return response()->json([
                'message' => 'Data tidak ada',
                'data' => []
            ], 404);
        } else {
            return response()->json([
                'message' => 'Berhasil akses data',
                'data' => $students
            ], 200);
        }
    }
    
    public function store(Request $request) {
        $validatedData = $request->validate([
            'nama' => 'required|string|max:255',
            'nim' => 'required|numeric|digits_between:1,10|unique:students,nim',
            'email' => 'required|email|unique:students,email',
            'jurusan' => 'required|string|max:100',
        ]);
    
        $student = Student::create($validatedData);
    
        $data = [
            'message' => 'Data berhasil ditambah',
            'data' => $student
        ];
        return response()->json($data, 201);
    }
    
    public function update(Request $request, $id) {
        $student = Student::find($id);
    
        if (!$student) {
            return response()->json([
                'message' => "Id $id tidak ditemukan"
            ], 404);
        }
    
        $validatedData = $request->validate([
            'nama' => 'sometimes|required|string|max:255',
            'nim' => 'sometimes|required|numeric|digits_between:1,10|unique:students,nim,' . $id,
            'email' => 'sometimes|required|email|unique:students,email,' . $id,
            'jurusan' => 'sometimes|required|string|max:100',
        ]);
    
        $student->update($validatedData);
    
        return response()->json([
            'message' => "Data dengan Id $id berhasil diupdate",
            'data' => $student
        ], 200);
    }
    
    public function delete(Request $request, $id) {
        $student = Student::find($id);

        if(!$student) {
            return response()->json([
                'message' => "Data dengan Id $id tidak ditemukan"
            ], 404);
        } else if($student) {
            $student->delete($student);

            $data = [
                'message' => "Data dengan Id $id telah dihapus",
                'data' => $student
            ];
            return response()->json($data, 200);
        }
    }

    public function show(Request $request, $id) {
        $student = Student::find($id);
        if($student) {
            $data = [
                'message' => 'Get detail data',
                'data' => $student
            ];
            return response()->json($data, 200);
        } else{
            $data = [
                'message' => "Data dengan Id $id tidak ditemukan",
                'data' => $student
            ];
            return response()->json($data, 404);
        }
    }
}
