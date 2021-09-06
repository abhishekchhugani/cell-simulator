# Cell Simulator: A zero player game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

This will install dependencies. This might be needed in case you don't have some deps installed flobally on your system.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## About Cell Simulator

The game is a zero-player game, meaning that its evolution is determined by its initial state,
requiring no further input. One interacts with the Cell Simulator by creating an initial configuration
and observing how it evolves.

Example: https://user-images.githubusercontent.com/291728/33158075-ec01ddde-d05a-11e7-99b8-35af2fed02e5.gif

### Acceptance criteria

 At initial state, User should see an empty board.
 User can make Cells alive.
 User can make Cells dead.
 User can trigger next generation.
 User can trigger a reset to the initial state.

### Next generation

 When the next generation is running:
o A Cell with fewer than two live neighbours dies of under-population.
o A Cell with 2 or 3 live neighbours lives on to the next generation.
o A Cell with more than 3 live neighbours dies of overcrowding.
o An empty Cell with exactly 3 live neighbours comes to life.
o A Cell who comes to life outside the board should wrap at the other side of the
board.

Once the next generation is done, User can trigger next generation again.

This example shows an initial state followed by 4 next generations:

https://user-images.githubusercontent.com/7149052/53603476-bfb00e00-3c05-11e9-8862-1dfd31836dcd.jpg

## How to play the game

 At initial state, User should see an empty board.
 To start ageneration, user can make a cell alive by clicking on any cell. Clicking back an alive cell will kill the cell.
 Make multiple neighbour cells alive. You can create as many patterns as you want.
 When done, click on Start Next Generation Button and the game will begin automatically and the cells will reach their fate as per the acceptance criteria.
