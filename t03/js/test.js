'use strict'

let obj = {
    words: 'newspapers newspapers  books magazines',
};

addWords(obj, 'radio newspapers   ');
console.log(obj.words);
removeWords(obj, 'newspapers   radio');
console.log(obj.words);
changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: 'tv internet'}