const btnAdd = document.body.querySelector('#add');
const btnClear = document.body.querySelector('#clear');
const pNotes = document.body.querySelector('#p-notes');
const textArea = document.body.querySelector('#textForCookie');

let buff = '';

function getSortedStorage() {
    let keys = Object.keys(localStorage);
    let arr = [];


    for(let key of keys) {
        arr.push([key,localStorage.getItem(key)]);
    }
    arr.sort((elem, next) => {
            return Number(elem[0]) - Number(next[0]);
    });
    return arr.map((elem) => elem[1]);
}
// getSortedStorage();
pNotes.innerHTML = (Object.keys(localStorage).length > 0) ?
    '==>' + getSortedStorage().join('<br>==>')
        :
    '[Empty]';

let counter = (pNotes.textContent == '[Empty]'
    || pNotes.textContent == '') 
    ? 1 : Object.keys(localStorage).length + 1;

btnAdd.addEventListener('click', () => {
    if (pNotes.textContent == '[Empty]'
        && textArea.value.length > 0) { pNotes.textContent = '' }
    if (textArea.value.length == 0) {
        alert("It's empty. Try to input something in \"Text input\".");
    }
    if (textArea.value.length > 0) {
        localStorage.setItem(counter, textArea.value);
        counter++;
        (pNotes.innerHTML == '') ?
            pNotes.innerHTML += '==>' + textArea.value
            :
            pNotes.innerHTML += '<br> ==>' + textArea.value;
    }
    textArea.value = '';
});

btnClear.addEventListener('click', () => {
    if(confirm('Areyou sure?')) {
        localStorage.clear();
        pNotes.innerHTML = '[Empty]';
    }
});
