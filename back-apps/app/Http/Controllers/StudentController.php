<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



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
    
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'nim' => 'numeric|required',
            'email' => 'email|required',
            'jurusan' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $student = Student::create($request->all());

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
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
