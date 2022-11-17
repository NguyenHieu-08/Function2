function checkString() {
    let str = document.getElementById('word').value;
    let x = document.getElementById('chart').value;

    let count = 0;
    if (str.includes(x)) {
        let arr = str.split("");
        
        for (let i = 0; i < str.length; i++) {
            if (x == arr[i]) {
                count++;
            }
        }

    } else count = -1;

    document.getElementById('result').innerHTML = count + ' lần';
}



