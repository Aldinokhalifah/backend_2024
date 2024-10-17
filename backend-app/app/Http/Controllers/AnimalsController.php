<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    private $animals = ['Kucing', 'Ayam', 'Ikan'];

    public function index() {
        echo 'Menampilkan data animals: ' . "<br>";
        foreach($this->animals as $ani) {
            echo '-' . $ani;
            echo "<br>";
        }
    }

    public function store() {
        $new_animal = "Musang";
        array_push($this->animals, $new_animal);
        echo "Menambah hewan $new_animal" . "<br>";
        echo ' Menampilkan data animals: ' . "<br>";
        foreach($this->animals as $ani) {
            echo '-' . $ani;
            echo '<br>';
        }
    }

    public function update($id) {
        $new_animal = 'Burung';
        if (isset($this->animals[$id])) {
            $this->animals[$id] = $new_animal;
            echo "Mengupdate data hewan id $id" . '<br>';
        } else {
            echo "Hewan dengan id $id tidak ditemukan.";
        }
        echo ' Menampilkan data animals: ' . '<br>';
        foreach($this->animals as $ani) {
            echo '-' . $ani;
            echo '<br>';
        }
    }
    
    public function delete($id) {
        if (isset($this->animals[$id])) {
            unset($this->animals[$id]);
            echo "Menghapus data hewan id $id" . '<br>';
        } else {
            echo "Hewan dengan id $id tidak ditemukan.";
        }
        echo ' Menampilkan data animals: ' . '<br>';
        foreach($this->animals as $ani) {
            echo '-' . $ani;
            echo '<br>';
        }
    }
}
