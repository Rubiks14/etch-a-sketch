"use strict"

const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

const container = document.getElementById("container");

for(let step = 0; step < GRID_WIDTH * GRID_HEIGHT; step++) {
    const gridPiece = document.createElement("div");
    gridPiece.classList.toggle("piece");
    container.appendChild(gridPiece);
}

container.style.width = `${GRID_WIDTH*1}em`

for (const piece of container.children) {
    piece.addEventListener("pointerenter", function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (!this.classList.contains("filled")) {
            this.classList.add("filled");
        }
    }, {once : true});
}