import { index, store, update, destroy } from './controller/FruitController.js';

const main = () => {
    console.log("Method index - Menampilkan Buah");
    index();
    console.log("\nMethod store - Menambahkan buah Pisang");
    store("Pisang");
    console.log("\nMethod update - Update data 0 menjadi Kelapa");
    update(0, "Kelapa");
    console.log("\nMethod destroy - Menghapus data 0");
    destroy(0);
};

main();