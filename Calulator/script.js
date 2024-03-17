var a = [];
function Show(value) {
    document.getElementById('screen').value += value;
    a.push(value);
}
function Clear() {
    document.getElementById("screen").value = "";
}
function Cal() {
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}
function Back() {
    a.pop();
    document.getElementById("screen").value = "";
    a.forEach((element, index) => {
        document.getElementById("screen").value += element;
    });
}