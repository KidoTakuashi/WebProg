const arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

function min5(array) {
    return array.filter(num => num < 5);
}

function findMinMax(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const minPosition = array.indexOf(min);
    const maxPosition = array.indexOf(max);
    return { minValue: min, maxValue: max, minPosition, maxPosition };
}

function sortDescrescator(array) {
    return array.slice().sort((a, b) => b - a); //slide = copia masiva
}

function BolisheSrednego(array) {
    const mean = array.reduce((sum, num) => sum + num, 0) / array.length;
    return array.filter(num => num > mean);
}

console.log("Menishe 5:", min5(arr));
console.log("Poz min i max:", findMinMax(arr));
console.log("Po ubivaniu:", sortDescrescator(arr));
console.log("Element blishe srednei summ:", BolisheSrednego(arr));


//task2

function uniqueSorted(array) {
    return [...new Set(array)].sort((a, b) => a - b);  // Set dlea udalenie dublicatow
}

const array2 = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

console.log("Sortirovka bez dublicatow:", uniqueSorted(array2)); 

//task3

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

console.log(user);
