
/*let c = number(a)+number (b);
let d = number(a)-number (b);
let e = number(a)*number (b);
let f = number(a)/number (b);*/



function tong() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = Number(a)+Number(b)
    document.getElementById("kq").innerHTML = c
}
function hieu() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let d = Number(a)- Number(b)
    document.getElementById("kq").innerHTML = d
}
function tich() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let e = Number(a) * Number(b)
    document.getElementById("kq").innerHTML = e
}
function thuong() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let f = Number(a)/Number(b)
    document.getElementById("kq").innerHTML = f

}



