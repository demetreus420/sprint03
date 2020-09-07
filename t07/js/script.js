"use strict";

function setCircles(character, dataProp) {
    let element;
    let arrPow;

    arrPow = dataProp.split(" ");
    for (let power of arrPow) {
        element = document.createElement("div");
        element.className = `elem ${power}`;
        if (power == "none") {
            let line = document.createElement("div");
            line.className = `line`;
            element.appendChild(line);
        }
        element.style.border = "2px white solid";
        character.appendChild(element);
    }
}

function checkErrors(character, prop) {
    let classProp;
    let dataProp;

    classProp = character.getAttribute("class");
    if (!prop
            || prop.length == 0
            || classProp !== "unknown"
            && classProp !== "good" 
            && classProp !== "evil" ) {
        character.setAttribute("class", "unknown");
    }
    dataProp = character.getAttribute("data-element");
    if (!dataProp || dataProp.length == 0) character.setAttribute("data-element", "none");
}

function setPowers() {
    let allCharacter = document.getElementsByTagName("li");
    let prop;

    for (let character of allCharacter) {
        prop = character.attributes;
        checkErrors(character, prop);
        character.appendChild(document.createElement("br"));
        setCircles(character, character.getAttribute("data-element"));
    }
}

setPowers();
