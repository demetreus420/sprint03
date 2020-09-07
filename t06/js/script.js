"use strict";

// function isOdd(num) {
//     return num % 2;
// }

// function func() {
//     let counter = 1;

//     return function() {
//         counter++;
//         let heroName = document.getElementById("hero");

//         if (isOdd(counter)) {
//             heroName.textContent = "Bruce Banner";
//             heroName.style.fontSize = "60px";
//             heroName.style.letterSpacing = "2px";
//             let childNodes = document
//                             .body
//                             .querySelectorAll("#lab ,#lab *");
//             for (let elem of childNodes) elem.style.backgroundColor = "#ffb300";
//         } else {
//             heroName.textContent = "Hulk";
//             heroName.style.fontSize = "130px";
//             heroName.style.letterSpacing = "6px";
//             let childNodes = document
//                             .body
//                             .querySelectorAll("#lab ,#lab *");
//             for (let elem of childNodes) elem.style.backgroundColor = "#70964b";
//         }
//     };
// }
// let transformation = func();


// *＜( ・∀・)ノ первый вариант задачи, выполнен с использованием замыканий, но потом я посидел-подумал и решил что это не валидно 	(っ˘̩╭╮˘̩)っ

function transformation() {
    let heroName = document.getElementById("hero");

    if (heroName.innerHTML != "Bruce Banner") {
        heroName.textContent = "Bruce Banner";
        heroName.style.fontSize = "60px";
        heroName.style.letterSpacing = "2px";
        let childNodes = document
                        .body
                        .querySelectorAll("#lab ,#lab *");
        for (let elem of childNodes) elem.style.backgroundColor = "#ffb300";
    } else {
        heroName.textContent = "Hulk";
        heroName.style.fontSize = "130px";
        heroName.style.letterSpacing = "6px";
        let childNodes = document
                        .body
                        .querySelectorAll("#lab ,#lab *");
        for (let elem of childNodes) elem.style.backgroundColor = "#70964b";
    }

}