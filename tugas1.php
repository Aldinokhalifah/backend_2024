<?php

class Animal{
    public $animals = [];

    public function __construct($animals = []) {
        $this->animals = $animals;
    }

    public function index() {
        foreach($this->animals as $ani) {
            echo $ani;
            echo '<br>';
        }
    }

    public function store($ani_baru) {
        $this->animals[] = $ani_baru;
        echo "$ani_baru sudah ditambahkan";
        echo '<br>';
    }

    public function update($index, $newAnimal) {
        if(isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index];
            $this->animals[$index] = $newAnimal;
            echo "$oldAnimal sudah diupdate menjadi $newAnimal";
            echo '<br>';
        } else{
            echo "Tidak ada hewan yang diupdate";
            echo '<br>';
        }
    }

    public function destroy($index) {
        if(isset($this->animals[$index])) {
            $animals = $this->animals;
            $animal = $this->animals[$index];
            unset($this->animals[$index]);
            echo "$animal Telah dihapus";
            echo '<br>';
        } else{
            echo "Tidak ada hewan yang dihapus";
            echo '<br>';
        }
    }
}

$animals = ["Babi Hutan", "Rusa", "Singa", "Beruang", "Lutung"];
$animal = new Animal($animals);

echo '<h3>Nama: ALdino Khalifah</h3>';
echo '<br>';
echo '<h3>Rombel: SE-01</h3>';
echo '<br>';
echo '<h3>NIM: 0110223089</h3>';

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo '<br>';

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Monyet');
echo '<br>';
$animal->index();
echo '<br>';

echo "Update - Mengupdate hewan <br>";
$animal->update(1, "Ayam");
echo '<br>';
$animal->index();
echo '<br>';

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(0);
$animal->index();
echo '<br>';
