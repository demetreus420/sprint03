'use sctrict';

function concat(string1, string2) {
    function secondUndef() {
        let string2 = prompt('Please enter second string!');
        if (string2 == null) return string1;
        secondUndef.count++;
        return string1 + ' ' + string2;
    }
    secondUndef.count = 0;
    return ((string2 == undefined) ? secondUndef
        : string1 + ' ' + string2);
}

// let smth = concat('Hi');
// let out = smth();

// console.log(out);
