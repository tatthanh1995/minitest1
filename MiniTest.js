let a = parseInt(document.getElementById("num1").value);
let b = parseInt(document.getElementById("num2").value);
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;

function tong() {
    document.getElementById("ketqua").innerHTML = c
}
function hieu() {
    document.getElementById("ketqua").innerHTML = d
}
function tich() {
    document.getElementById("ketqua").innerHTML = e
}
function thuong() {
    document.getElementById("ketqua").innerHTML = f

}



