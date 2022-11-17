let $ = document.querySelector.bind(document);

let number1 = $('#number1');
let number2 = $('#number2');
let number3 = $('#number3');

function checkMin(a,b,c) {
    a = +(a.value);
    b = +(b.value);
    c = +(c.value);

    let min = a;
    if (min > b)    min = b;
    if (min > c)    min = c;
    
    document.getElementById('result').innerHTML = min;
}

