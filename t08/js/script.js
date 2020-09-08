"use strict";


//Братишка, я покодить принёс...

function setTable() {
    //start of declarations {
    let table = document.createElement("table");
    let header = document.createElement("thead");
    let body = document.createElement("tbody");
    let message = document.createElement("div");
    let headerRows = [header.insertRow(0)];
    let rows = [
        body.insertRow(0),
        body.insertRow(1),
        body.insertRow(2),
        body.insertRow(3),
        body.insertRow(4),
        body.insertRow(5),
        body.insertRow(6),
        body.insertRow(7),
        body.insertRow(8),
    ];
    // } end of declarations
    //
    table.id = "hero-table";
    message.id = 'message';
    message.hidden = true;
    table.valFuncName = true;
    table.valFuncStr = true;
    table.valFuncAge = true;
    
    //
    headerRows = headerRows.map((elem) => {
        return [elem.insertCell(0), elem.insertCell(1), elem.insertCell(2)];
    });
    headerRows[0][0].innerHTML = "Name";
    headerRows[0][1].innerHTML = "Strength";
    headerRows[0][2].innerHTML = "Age";

    rows = rows.map((elem) => {
        return [elem.insertCell(0), elem.insertCell(1), elem.insertCell(2)];
    });
    //Names
    rows[0][0].innerHTML = "Black<br>Pantera"; //
    rows[1][0].innerHTML = "Captain<br>America"; //
    rows[2][0].innerHTML = "Captain<br>Marvel"; //
    rows[3][0].innerHTML = "Hulk"; //
    rows[4][0].innerHTML = "Iron<br>Man"; //
    rows[5][0].innerHTML = "Spider-<br>Man"; //
    rows[6][0].innerHTML = "Thanos"; //
    rows[7][0].innerHTML = "Thor";
    rows[8][0].innerHTML = "Yon-<br>Rogg";
    //Strength
    rows[0][1].innerHTML = "66"; //
    rows[1][1].innerHTML = "79"; //
    rows[2][1].innerHTML = "97"; //
    rows[3][1].innerHTML = "80"; //
    rows[4][1].innerHTML = "88"; //
    rows[5][1].innerHTML = "78"; //
    rows[6][1].innerHTML = "99"; //
    rows[7][1].innerHTML = "95"; //
    rows[8][1].innerHTML = "73";
    //Age
    rows[0][2].innerHTML = "53"; //
    rows[1][2].innerHTML = "137"; //
    rows[2][2].innerHTML = "26"; //
    rows[3][2].innerHTML = "49"; //
    rows[4][2].innerHTML = "48"; //
    rows[5][2].innerHTML = "16"; //
    rows[6][2].innerHTML = "1000"; //
    rows[7][2].innerHTML = "1000"; //
    rows[8][2].innerHTML = "52";
    //
    // console.log(rows);
    document.body.querySelector("main #placeholder").remove();
    document.body.querySelector("main #notification").remove();
    document.body.append(message);
    table.append(header);
    table.append(body);
    document.body.append(table);

    function messageOnClick(cellName) {
        message.hidden = false;
            (cellName == 'Name') ? message.textContent = `Sorting by Name, order ${table.valFuncName ? 'ASC' : 'DESC'}`
            :
            (cellName == 'Strength') ? message.textContent = `Sorting by Strength, order ${table.valFuncStr ? 'ASC' : 'DESC'}`
            :
            (cellName == 'Age') ? message.textContent = `Sorting by Age, order ${table.valFuncAge ? 'ASC' : 'DESC'}`
            : ()=>{};
        setTimeout(() => {message.hidden = true;}, 8000);
        
    }

    headerRows[0][1].onclick = function() {
        let len = rows.length - 1;
        if (table.valFuncStr) {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (
                        Number(rows[j][1].innerHTML) >
                        Number(rows[j + 1][1].innerHTML)
                    ) {
                        let tmp1 = Number(rows[j][1].innerHTML);
                        let tmp2 = rows[j][0].innerHTML;
                        let tmp3 = Number(rows[j][2].innerHTML);
                        //
                        rows[j][0].innerHTML = `${rows[j + 1][0].innerHTML}`;
                        rows[j][1].innerHTML = `${Number(
                            rows[j + 1][1].innerHTML
                        )}`;
                        rows[j][2].innerHTML = `${Number(
                            rows[j + 1][2].innerHTML
                        )}`;
                        //
                        rows[j + 1][0].innerHTML = `${tmp2}`;
                        rows[j + 1][1].innerHTML = `${tmp1}`;
                        rows[j + 1][2].innerHTML = `${tmp3}`;
                    }
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (
                        Number(rows[j][1].innerHTML) <
                        Number(rows[j + 1][1].innerHTML)
                    ) {
                        let tmp1 = Number(rows[j][1].innerHTML);
                        let tmp2 = rows[j][0].innerHTML;
                        let tmp3 = Number(rows[j][2].innerHTML);
                        //
                        rows[j][0].innerHTML = `${rows[j + 1][0].innerHTML}`;
                        rows[j][1].innerHTML = `${Number(
                            rows[j + 1][1].innerHTML
                        )}`;
                        rows[j][2].innerHTML = `${Number(
                            rows[j + 1][2].innerHTML
                        )}`;
                        //
                        rows[j + 1][0].innerHTML = `${tmp2}`;
                        rows[j + 1][1].innerHTML = `${tmp1}`;
                        rows[j + 1][2].innerHTML = `${tmp3}`;
                    }
                }
            }
        }
        messageOnClick('Strength');
        table.valFuncStr = !table.valFuncStr;
    };

    headerRows[0][0].onclick = function() {
        let len = rows.length - 1;
        if (table.valFuncName) {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (
                        rows[j][0].innerHTML.toUpperCase() >
                        rows[j + 1][0].innerHTML.toUpperCase()
                    ) {
                        let tmp1 = Number(rows[j][1].innerHTML);
                        let tmp2 = rows[j][0].innerHTML;
                        let tmp3 = Number(rows[j][2].innerHTML);
                        //
                        rows[j][0].innerHTML = `${rows[j + 1][0].innerHTML}`;
                        rows[j][1].innerHTML = `${Number(
                            rows[j + 1][1].innerHTML
                        )}`;
                        rows[j][2].innerHTML = `${Number(
                            rows[j + 1][2].innerHTML
                        )}`;
                        //
                        rows[j + 1][0].innerHTML = `${tmp2}`;
                        rows[j + 1][1].innerHTML = `${tmp1}`;
                        rows[j + 1][2].innerHTML = `${tmp3}`;
                    }
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (
                        rows[j][0].innerHTML.toUpperCase() <
                        rows[j + 1][0].innerHTML.toUpperCase()
                    ) {
                        let tmp1 = Number(rows[j][1].innerHTML);
                        let tmp2 = rows[j][0].innerHTML;
                        let tmp3 = Number(rows[j][2].innerHTML);
                        //
                        rows[j][0].innerHTML = `${rows[j + 1][0].innerHTML}`;
                        rows[j][1].innerHTML = `${Number(
                            rows[j + 1][1].innerHTML
                        )}`;
                        rows[j][2].innerHTML = `${Number(
                            rows[j + 1][2].innerHTML
                        )}`;
                        //
                        rows[j + 1][0].innerHTML = `${tmp2}`;
                        rows[j + 1][1].innerHTML = `${tmp1}`;
                        rows[j + 1][2].innerHTML = `${tmp3}`;
                    }
                }
            }
        }
        messageOnClick('Name');
        table.valFuncName = !table.valFuncName;
    };

    headerRows[0][2].onclick = function() {
        let len = rows.length - 1;
        if (table.valFuncAge) {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (
                        Number(rows[j][2].innerHTML) >
                        Number(rows[j + 1][2].innerHTML)
                    ) {
                        let tmp1 = Number(rows[j][1].innerHTML);
                        let tmp2 = rows[j][0].innerHTML;
                        let tmp3 = Number(rows[j][2].innerHTML);
                        //
                        rows[j][0].innerHTML = `${rows[j + 1][0].innerHTML}`;
                        rows[j][1].innerHTML = `${Number(
                            rows[j + 1][1].innerHTML
                        )}`;
                        rows[j][2].innerHTML = `${Number(
                            rows[j + 1][2].innerHTML
                        )}`;
                        //
                        rows[j + 1][0].innerHTML = `${tmp2}`;
                        rows[j + 1][1].innerHTML = `${tmp1}`;
                        rows[j + 1][2].innerHTML = `${tmp3}`;
                    }
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (
                        Number(rows[j][2].innerHTML) <
                        Number(rows[j + 1][2].innerHTML)
                    ) {
                        let tmp1 = Number(rows[j][1].innerHTML);
                        let tmp2 = rows[j][0].innerHTML;
                        let tmp3 = Number(rows[j][2].innerHTML);
                        //
                        rows[j][0].innerHTML = `${rows[j + 1][0].innerHTML}`;
                        rows[j][1].innerHTML = `${Number(
                            rows[j + 1][1].innerHTML
                        )}`;
                        rows[j][2].innerHTML = `${Number(
                            rows[j + 1][2].innerHTML
                        )}`;
                        //
                        rows[j + 1][0].innerHTML = `${tmp2}`;
                        rows[j + 1][1].innerHTML = `${tmp1}`;
                        rows[j + 1][2].innerHTML = `${tmp3}`;
                    }
                }
            }
        }
        messageOnClick('Age');
        table.valFuncAge = !table.valFuncAge;
    };
}

setTable();
