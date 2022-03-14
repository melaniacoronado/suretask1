
var timer = null;
document.addEventListener("selectionchange", onSelection, false);
document.addEventListener("select", onSelection, false);

function onSelection() {
    clearTimeout(timer);
    timer = setTimeout(highlight, 500);
}

function highlight() {
    var selection = window.getSelection();
    if (!selection.rangeCount) 
        return;
    
    let textToSearch = window.getSelection().toString()
    let paragraph = document.getElementById("paragraph");
    paragraph.innerHTML = paragraph.textContent.replace(textToSearch, match => `<mark>${match}</mark>`)
}