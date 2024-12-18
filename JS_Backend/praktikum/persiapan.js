export const persiapan = () => {
    setTimeout(() => {
        console.log('Mempersiapkan bahan...');
    }, 3000);
}

export const rebusAir = () => {
    setTimeout(() => {
        console.log('mempersiapkan...');
    }, 7000);
}

export const masak = () => {
    setTimeout(() => {
        console.log('Memasak mie...');
        console.log('SELESAI');
    }, 5000);
}
