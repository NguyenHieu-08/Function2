function swap(num1,num2) {
    num1 = (+num1.value);
    num2 = (+num2.value);
    
    let temp = num1;
    num1 = num2;
    num2 = temp;

    document.getElementById('a').innerHTML = num1;
    document.getElementById('b').innerHTML = num2;
}