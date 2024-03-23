const canvas = document.querySelector(".canvas");
const resetBtn = document.getElementById("reset-btn");
const startBtn = document.getElementById("start-btn");
const changeGridBtn = document.getElementById("change-grid-btn");

let canvasWidth = 680;
let gridSize = 16;

let drawingStart = false;

function setGridSize() {
	gridSize = prompt("Enter desired grid size (max = 100)");
	if (gridSize > 100) {
		alert(
			"Cannot set grid size more than 100, grid size will be set 100 instead"
		);
		gridSize = 100;
	}
	let child = canvas.lastElementChild;
	while (child) {
		canvas.removeChild(child);
		child = canvas.lastElementChild;
	}
	createTiles(gridSize);
}

function handleDraw(e) {
	if (!drawingStart) {
		return;
	}
	e.target.classList.add("tiles-selected");
}

function startDraw(e) {
	if (drawingStart) {
		drawingStart = false;
		console.log(startBtn);
		startBtn.textContent = "START";
	} else {
		drawingStart = true;
		startBtn.textContent = "STOP";
	}
}

function resetTiles(e) {
	document.querySelector(".canvas").childNodes.forEach((tile) => {
		console.log(tile.classList.value);
		tile.classList.remove("tiles-selected");
	});
}

function createTiles(gridSize) {
	for (let i = 0; i < gridSize * gridSize; i++) {
		let tile = document.createElement("div");
		tile.classList = "tiles";
		tile.style.cssText = `width: ${canvasWidth / gridSize}px; height: ${
			canvasWidth / gridSize
		}px; `;
		tile.addEventListener("mouseenter", handleDraw);

		canvas.appendChild(tile);
	}
}

resetBtn.addEventListener("click", resetTiles);
startBtn.addEventListener("click", startDraw);
changeGridBtn.addEventListener("click", setGridSize);
createTiles(gridSize);
