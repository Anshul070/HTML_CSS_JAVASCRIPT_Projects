function allowDrop(ev) {
    ev.preventDefault();
}


function drag(ev) {
    ev.dataTransfer.setData("element", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("element");
    ev.target.appendChild(document.getElementById(data));
}