/**
 * For now i have taken a 20x20 grid. 
 * We can parameterise the app to accept as input also.
 *  Something for future improvement maybe.
 *  */

export const numberOfGridRows = 35;
export const numberOfGridColumns = 35;


/**
 * This is the matrix of all coordinates of all possible neighbours of a cell. 
 * I have created this to find all neighbours of a cell
 */

export const neighbourCordinates = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];


