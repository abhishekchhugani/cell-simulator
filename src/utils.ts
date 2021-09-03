import { neighbourCordinates } from "./constants";

//Function to create a matrix of 0s for a blank grid

export const createGrid = (rows: number, columns: number) => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
        grid.push(Array.from(Array(columns), () => 0));
    }

    return grid;
};

// Function to find the neighbours of each cell

export const findNeighbourCells = (cellX: number, cellY: number, totalRows: number, totalColumns: number, grid: number[][]) => {
    let neighbourCells = 0;
    neighbourCordinates.forEach(([x, y]) => {
        let neighbourX = cellX + x;
        let neighbourY = cellY + y;

        // Logic for wrapping the cell if it comes to life outside the board starts here

        if (neighbourX === -1) {
            neighbourX = totalColumns - 1;
        }
        if (neighbourX === totalColumns) {
            neighbourX = 0;
        }
        if (neighbourY === -1) {
            neighbourY = totalRows - 1;
        }
        if (neighbourY === totalRows) {
            neighbourY = 0;
        }

        // Logic for wrapping the cell if it comes to life outside the board ends here

        if (neighbourX >= 0 && neighbourX < totalRows && neighbourY >= 0 && neighbourY < totalColumns) {
            neighbourCells += grid[neighbourX][neighbourY];
        }
    });
    return neighbourCells;
}

//Function to check if the cell needs to be killed

export const killCell = (neighbours: number) => {
    return neighbours < 2 || neighbours > 3;
}

//Function to check if a cell has to be made alive

export const makeAlive = (neighbours: number, cellIsDead: boolean) => {
    return cellIsDead && neighbours === 3;
}