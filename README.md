# Conway’s Game of Life

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

## About Conway’s Game of Life

The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

### Rules

Each cell with one or no neighbors dies, as if by solitude.

Each cell with four or more neighbors dies, as if by overpopulation.

Each cell with two or three neighbors survives.

For a space that is empty or unpopulated
Each cell with three neighbors becomes populated.

### More information

https://playgameoflife.com/info

## How to play the game

 At initial state, User should see an empty board.
 To start a generation, user can make a cell alive by clicking on any cell. Clicking back an alive cell will kill the cell.
 Make multiple neighbour cells alive. You can create as many patterns as you want.
 When done, click on Start Next Generation Button and the game will begin automatically and the cells will reach their fate as per the acceptance criteria.
