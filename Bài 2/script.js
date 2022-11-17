function printAreaAndPerimeterCircle(r) {
    r = +(r.value);
    document.getElementById('resultArea').innerHTML = (Math.PI) * r ** 2;
    document.getElementById('resultPerimeter').innerHTML = (Math.PI) * r * 2;
}