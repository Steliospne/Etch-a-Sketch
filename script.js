const body = document.querySelector('body');
const primary_container = document.querySelector('.primary-container');
const btn_container = document.querySelector('.btn-container');
const getGrid = document.querySelector('.getGrid');
const clearBtn = document.querySelector('.clearGrid');
const resetBtn = document.querySelector('.resetGrid');
const setMode = document.querySelector('.setMode');
const BTN_CONTAINER_SIZE = primary_container.clientWidth;
const GRID_CONTAINER_SIZE = primary_container.clientWidth;
let cells;

btn_container.style.width = BTN_CONTAINER_SIZE + "px";

clearBtn.addEventListener('click', clear);

resetBtn.addEventListener('click', reset);

setMode.addEventListener('click', mode);

getGrid.addEventListener('click', () => {
    reset();
    cells = +prompt("Enter grid size per side.");
    createGrid(cells);
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(cells) {
    for (let i = 1; i < cells ** 2 + 1; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = `grid-item${i}`;
        gridItem.style.boxSizing = "border-box";
        gridItem.style.width = GRID_CONTAINER_SIZE / cells + "px";
        gridItem.style.height = gridItem.style.width;
        gridItem.addEventListener('mousedown', paint);
        gridItem.addEventListener('mouseover', paint);
        primary_container.appendChild(gridItem);
    }
}

function clear() {
    reset()
    createGrid(cells)
}

function reset() {
    primary_container.innerHTML = "";
}

function paint(e) {
    if (e.type == "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = "black";
}