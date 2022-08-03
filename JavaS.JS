function table () {
let generate = document.getElementById('tableValue').value;
for (let index = 1 ; index <= 100; index++ ) {document.write(
"<h1>" + generate + "x" + index + "=" + generate*index + "</h1>");}}

function tawafValue () {
    let accounting = document.getElementById('tawaff').value;
    for (let index = 1 ; index <= 7; index++ ) {document.write(
    "<h2>" + accounting + "x" + index + "=" + accounting*index + "</h2>");}}