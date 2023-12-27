const body = document.querySelector('body');
const primary_container = document.querySelector('.primary-container');
const btn_container = document.querySelector('.btn-container');
const getGrid = document.querySelector('.getGrid');
const clearBtn = document.querySelector('.clearGrid');
const resetBtn = document.querySelector('.resetGrid');
const setMode = document.querySelector('.setMode');
const gridSize = document.querySelector('h3');
const BTN_CONTAINER_SIZE = primary_container.clientWidth;
const GRID_CONTAINER_SIZE = primary_container.clientWidth;
let newMode = "default";
let cells;

btn_container.style.width = BTN_CONTAINER_SIZE + "px";

clearBtn.addEventListener('click', clear);

resetBtn.addEventListener('click', reset);

setMode.addEventListener('click', mode);

getGrid.addEventListener('click', () => {
    reset();
    cells = +prompt("Enter grid size per side.");
    createGrid(cells);
    gridSize.textContent = `${cells}x${cells}`
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

function mode() {
    if (newMode == "default") {
        setMode.textContent = "Rainbow";
        setMode.style.backgroundImage = "radial-gradient(red, orange, yellow, green, blue, indigo, violet)"
        newMode = "rainbow";
    } else if (newMode == "rainbow"){
        setMode.textContent = "Eraser";
        setMode.style.backgroundImage = "";
        setMode.style.backgroundColor = "white";
        setMode.style.color = "black";
        newMode = "eraser";
    } else {
        setMode.textContent = "Default";
        setMode.style.backgroundImage = "";
        setMode.style.backgroundColor = "";
        setMode.style.color = "";
        newMode = "default";
    }
    
}

function clear() {
    primary_container.innerHTML = "";
    createGrid(cells)
}

function reset() {
    primary_container.innerHTML = "";
    gridSize.textContent = "";
}

function paint(e) {
    e.preventDefault();
    if (e.type == "mouseover" && !mouseDown) return;
    if (newMode == "default") {
        e.target.style.backgroundColor = "black";
    } else if (newMode == "rainbow"){
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    } else {
        e.target.style.backgroundColor = "white";
    }
    
}