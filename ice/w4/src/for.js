for (var i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random()*100));
}

let array = [];
for (var i = 0; i < 100; i++) {
    array.push(i);
}
console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]*2);
}