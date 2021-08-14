function makeRed() {
    document.body.style.backgroundColor = "red";
}
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

// make green via call getElementById
const makeBlue = document.getElementById('blue');
makeBlue.onclick = blueBG;
function blueBG() {
    document.body.style.backgroundColor = "blue";
}
// anonymous function 
const makeGreen = document.getElementById('green');
makeGreen.onclick = function () {
    document.body.style.backgroundColor = "green";
}
// handle by addEventListener
const makeGoldenrod = document.getElementById('goldenrod');
makeGoldenrod.addEventListener('click', makegold)
function makegold() {
    document.body.style.backgroundColor = 'goldenrod';
}

// anonymous function addEventlistener
const makeHotPink = document.getElementById('hotpink');
makeHotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})
//direct shortcut
document.getElementById('hotpink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})



// function click text show 

function justClickFunction() {
    const clickMethod = document.getElementById('clicking-method')
    clickMethod.innerText = 'Just added by click function';
}

// direct click text show 
document.getElementById('direct-click').addEventListener('click', function () {
    const clickMethod = document.getElementById('clicking-method')
    clickMethod.innerText = 'Added by Direct click function';
})

// from text box get data and show 
document.getElementById('from-textBox').addEventListener("click", function () {
    const textField = document.getElementById('name-field')
    const clickMethod = document.getElementById('clicking-method')
    clickMethod.innerText = textField.value;
    textField.value = '';
})




document.getElementById('add-comment').addEventListener('click', function () {
    const area = document.getElementById('text-area');

    const p = document.createElement('p');
    p.innerText = area.value;
    area.value = '';

    // append child
    const cmntFast = document.getElementById('comment-fast');
    cmntFast.appendChild(p);
})
