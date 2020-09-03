'use strict';

function addWords(obj, wrds) {
    obj.words = obj.words + ' ' + wrds;
    obj.words = obj.words.split(' ')
        .filter((word) => word != '')
        .filter((value, index, self) => self.indexOf(value) === index)
        .join(' ');
}

function removeWords(obj, wrds) {
    let wordsArr = wrds.split(' ')
        .filter((word) => word != '')
        .filter((value, index, self) => self.indexOf(value) === index);
    obj.words = obj.words.split(' ')
        .filter((word) => word != '')
        .filter((word) => !wordsArr.includes(word))
        .filter((value, index, self) => self.indexOf(value) === index)
        .join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
}
