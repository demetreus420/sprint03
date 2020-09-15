const btnAdd = document.body.querySelector('#add');
const btnClear = document.body.querySelector('#clear');
const pNotes = document.body.querySelector('#p-notes');
const textArea = document.body.querySelector('#textForCookie');

let date = new Date();
date.setMonth(new Date().getMonth() + 1);
date = date.toUTCString();

let buff = '';
let cookies = `expires=${date}`;
document.cookie = cookies;
pNotes.innerHTML = (document.cookie.split('; ').length > 1) ?
    '==>' + document.cookie.split('; ').slice(0, -1)
        .sort((elem, next) => {
            return Number(elem[0]) - Number(next[0]);
        }).map(elem => {
            return elem.slice(elem.indexOf('=') + 1, elem.length);;
        }).join('<br>==>')
        :
    '[Empty]';

let counter = (pNotes.textContent == '[Empty]'
    || pNotes.textContent == '') 
    ? 1
    : document.cookie.split('; ').slice(0, -1).sort((elem, next) => {
        return elem[0] - next[0];
    }).length + 1;



btnAdd.addEventListener('click', () => {
    if (pNotes.textContent == '[Empty]'
        && textArea.value.length > 0) { pNotes.textContent = '' }
    if (textArea.value.length == 0) {
        alert("It's empty. Try to input something in \"Text input\".");
    }
    if (textArea.value.length > 0) {
        buff = `${counter}=${textArea.value};`;
        counter++;
        document.cookie = buff;
        (pNotes.innerHTML == '') ?
            pNotes.innerHTML += '==>' + buff.slice(buff.indexOf('=') + 1, -1)
            :
            pNotes.innerHTML += '<br> ==>' + buff.slice(buff.indexOf('=') + 1, -1);
    }
    textArea.value = '';
});

btnClear.addEventListener('click', () => {
    if(confirm('Areyou sure?')) {
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        pNotes.innerHTML = '[Empty]';
    }
});
