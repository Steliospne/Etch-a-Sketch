const primary_container = document.querySelector(".primary-container");
let row1, row2, row3, row4;
let col1, col2, col3, col4;
const rowArray = [row1, row2, row3, row4];
const colArray = [col1,col2,col3,col4];
let i = 1;
let k = 1;
for (colms in colArray) {
    colms = document.createElement('div')
    colms.className = `col${k}`;
    primary_container.appendChild(colms);
    k =++k;
    for (rows of rowArray) {
        rows = document.createElement('div');
        rows.className = `row${i}`;
        colms.appendChild(rows);
        i = ++i;
    }
}


