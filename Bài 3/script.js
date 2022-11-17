let number1 = document.getElementById('number1');
function Factorial(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    return fac;
}

function printFactorial(num1) {
    num1 = +(num1.value);
    document.getElementById('result').innerHTML = Factorial(num1);
}
