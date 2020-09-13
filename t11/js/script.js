const btnAdd = document.body.querySelector('#add');
const btnClear = document.body.querySelector('#clear');
const pNotes = document.body.querySelector('#p-notes');
const textArea = document.body.querySelector('#textForCookie');
let buff = '';
let counter = 1;
let date = new Date();    
date.setMonth(new Date().getMonth() + 1);
let cookies = `expires=${date}`;
document.cookie = cookies;


btnAdd.addEventListener('click', ()=>{
    if (textArea.value.split(' ').length > 0) {
        buff += `${counter}=${textArea.value};`;
        counter++;
        document.cookie += buff;
    }
    textArea.value = '';
});

function getCookie(name) { 
    let matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" )); 
    return matches ? decodeURIComponent(matches[1]) : undefined; 
}


