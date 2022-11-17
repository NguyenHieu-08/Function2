function checkInt(num) {
    num = (+num.value)
    return (Number.isInteger(num) && num > 0)? alert('True'): alert('False');
}