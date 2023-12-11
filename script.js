const cells = +prompt("Enter grid size per side.");
const primary_container = document.querySelector(".primary-container");
const containerMaxWidth = primary_container.offsetWidth;

createGrid(cells);

function createGrid(cells) {
    for (let i = 1; i < cells ** 2 + 1; i++) {
        const gridItem = document.createElement("div");
        let gridItemTop, gridItemRight, gridItemBottom, gridItemLeft;
        gridItem.className = `grid-item${i}`;
        gridItem.textContent = i;
        gridItem.style.boxSizing = "border-box";
        gridItem.style.width = containerMaxWidth / cells + "px";
        gridItem.style.height = gridItem.style.width;
        gridItem.style.border = "solid black";

        setGridBorders(
            i,
            gridItemTop,
            gridItemRight,
            gridItemBottom,
            gridItemLeft,
            cells,
            gridItem
        );
        primary_container.appendChild(gridItem);
    }
}

function setGridBorders(
    i,
    gridItemTop,
    gridItemRight,
    gridItemBottom,
    gridItemLeft,
    cells,
    gridItem
) {
    if (i == 1) {
        gridItemTop = 4;
        gridItemRight = 2;
        gridItemBottom = 2;
        gridItemLeft = 4;
    } else if (i == cells) {
        gridItemTop = 4;
        gridItemRight = 4;
        gridItemBottom = 2;
        gridItemLeft = 2;
    } else if (i == 3 * cells + 1) {
        gridItemTop = 2;
        gridItemRight = 2;
        gridItemBottom = 4;
        gridItemLeft = 4;
    } else if (i == cells ** 2) {
        gridItemTop = 2;
        gridItemRight = 4;
        gridItemBottom = 4;
        gridItemLeft = 2;
    } else if (i > 0 && i < cells) {
        gridItemTop = 4;
        gridItemRight = 2;
        gridItemBottom = 2;
        gridItemLeft = 2;
    } else if (i % cells == 0 && i != 0 && i != cells ** 2) {
        gridItemTop = 2;
        gridItemRight = 4;
        gridItemBottom = 2;
        gridItemLeft = 2;
    } else if (i % cells == 1 && i != 1 && i != 3* cells + 1) {
        gridItemTop = 2;
        gridItemRight = 2;
        gridItemBottom = 2;
        gridItemLeft = 4;
    } else if (i > 3 * cells + 1 && i< cells **2) {
        gridItemTop = 2;
        gridItemRight = 2;
        gridItemBottom = 4;
        gridItemLeft = 2;
    }
    else {
        gridItemTop = 2;
        gridItemRight = 2;
        gridItemBottom = 2;
        gridItemLeft = 2;
    }
    console.log(gridItem.style.borderWidth = new String(`${gridItemTop}px ${gridItemRight}px ${gridItemBottom}px ${gridItemLeft}px`));
}
