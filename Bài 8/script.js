function reverse1() {
    let number = [1,2,3,4,5,6,7,8,9];
    let first = 0;
    let last = number.length-1;
    while(first < last) {
        let temp = number[first];
        number[first] = number[last];
        number[last] = temp;
        first++;
        last--;
    }
    
    document.getElementById('result').innerHTML = number;
}

