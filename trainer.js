var slideInterval = 30000;

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;        
        }
    }
    pointer = pointer + 1;
    if (pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {
    setTimeout(moveForward, slideInterval);
}

startPlayback();