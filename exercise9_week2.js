/*
 BUATLAH KODE FUNCTION DISINI
 nomor 1
*/

function shoutOut() {
    return "Halo Function!"
}

var container = shoutOut();
console.log(container) // Menampilkan "Halo Function!" di console

/*
 BUATLAH KODE FUNCTION DISINI
 nomer 2
*/

function hasilPerkalian(num1,num2) {
    return num1 * num2;
}

var num1 = 5;
var num2 = 6;
console.log(hasilPerkalian(num1,num2)); // Menampilkan angka 30

/*
 BUATLAH KODE FUNCTION DISINI
 nomer 3
*/

function processSentence () {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby " + hobby
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
