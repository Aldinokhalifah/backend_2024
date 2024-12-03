const fruits = require('../data/fruits.js'); 

const index = () => {
    for (let buah of fruits) {
        console.log(buah);
    }
};

const store = (name) => {
    fruits.push(name);
    console.log(fruits);
};

const update = (position, name) => {
    if (position >= 0 && position < fruits.length) {
        fruits[position] = name; 
    } else {
        console.log("Index tidak valid");
    }
};

const destroy = (position) => {
    if (position >= 0 && position < fruits.length) {
        fruits.splice(position, 1); 
    } else {
        console.log("Index tidak valid");
    }
};

module.exports = {
    index,
    store,
    update,
    destroy,
};
