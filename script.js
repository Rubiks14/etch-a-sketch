"use strict"

const MIN_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;
const CONTAINER_WIDTH = 720;

let gridSize = 16
let unitSize = CONTAINER_WIDTH / gridSize;

const container = document.getElementById("container");
container.style.width = `${CONTAINER_WIDTH}px`

let behaviorFunction = defaultBehavior;

document.querySelector("#resizeButton").addEventListener("click", () => {
    let size = 0;
    size = prompt("Please enter a grid size between 16 and 100");
    if (size < MIN_GRID_SIZE) {
        size = MIN_GRID_SIZE;
    }
    else if (size > MAX_GRID_SIZE) {
        size = MAX_GRID_SIZE;
    }
    else if (size == '') {
        size = gridSize;
    }
    gridSize = size;
    unitSize = CONTAINER_WIDTH / gridSize;
    initBoard();
});

document.querySelector("#defaultBehavior").addEventListener("click", () => {
    behaviorFunction = defaultBehavior;
    initBoard();
})

document.querySelector("#rainbowBehavior").addEventListener("click", () => {
    behaviorFunction = rainbowBehavior;
    initBoard();
})

function defaultBehavior(e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.backgroundColor = "darkgray";
}

function rainbowBehavior(e) {
    e.stopPropagation();
    e.preventDefault();
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function initBoard() {
    container.textContent = '';
    for(let step = 0; step < gridSize * gridSize; step++) {
        const gridPiece = document.createElement("div");
        gridPiece.classList.toggle("piece");
        gridPiece.style.width = `${unitSize}px`;
        gridPiece.style.height = `${unitSize}px`;
        gridPiece.addEventListener("pointerenter", behaviorFunction);
        container.appendChild(gridPiece);
    }
}

initBoard();