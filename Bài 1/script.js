function square(num) {
    return num * num;
}

function printSquare(option) {
    let number = +(option.value);
    if(number == 0) {
        document.getElementById('result').innerHTML = 0;
    } else {
        document.getElementById('result').innerHTML = square(number);
    }
}