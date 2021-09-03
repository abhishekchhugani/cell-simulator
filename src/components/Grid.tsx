import * as React from "react";
import produce from "immer";
import { Button } from "./Button";
import { createGrid, findNeighbourCells, killCell, makeAlive } from "../utils";
import { gridContainerStyle, cellStyle } from "../style";

export interface IGridProps {
  rows: number;
  columns: number;
  id: string;
}

const Grid = (props: IGridProps) => {
  const [grid, setGrid] = React.useState(() => {
    return createGrid(props.rows, props.columns);
  });

  const [isGenerationOn, setIsGenerationOn] = React.useState(false);

  const isGenerationOnRef = React.useRef(isGenerationOn);
  isGenerationOnRef.current = isGenerationOn;

  //Function to make cell alive

  const toggleCells = (rowIndex: number, columnIndex: number) => {
    let newGrid = JSON.parse(JSON.stringify([...grid]));
    newGrid[rowIndex][columnIndex] = grid[rowIndex][columnIndex] ? 0 : 1;
    setGrid(newGrid);
  };

  /** Recursive function to start next generation.
   * Once started cells will keep on multiplying every 100 ms
   */

  const startNextGeneration = React.useCallback(() => {
    if (!isGenerationOnRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < props.rows; i++) {
          for (let k = 0; k < props.columns; k++) {
            let neighbours = findNeighbourCells(
              i,
              k,
              props.rows,
              props.rows,
              g
            );
            if (killCell(neighbours)) {
              gridCopy[i][k] = 0;
            } else if (makeAlive(neighbours, g[i][k] === 0)) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(startNextGeneration, 100);
  }, []);

  return (
    <>
      <Button
        id="new-generation-toggle-button"
        data-testid="new-generation-toggle-button"
        label={
          isGenerationOn ? "Stop Next Generation" : "Start Next Generation"
        }
        onClick={() => {
          setIsGenerationOn(!isGenerationOn);
          if (!isGenerationOn) {
            isGenerationOnRef.current = true;
            startNextGeneration();
          }
        }}
      />
      <Button
        id="reset-button"
        data-testid="reset-button"
        label="Reset"
        onClick={() => {
          setIsGenerationOn(!isGenerationOn);
          setGrid(createGrid(props.rows, props.columns));
        }}
      />
      <div style={gridContainerStyle(props.columns)} data-testid={props.id}>
        {grid.map((gridRow, gridRowIndex) =>
          gridRow.map((gridColumn, gridColumnIndex) => (
            <div
              key={`${gridRowIndex}-${gridColumnIndex}`}
              onClick={() => {
                toggleCells(gridRowIndex, gridColumnIndex);
              }}
              style={cellStyle(grid[gridRowIndex][gridColumnIndex] === 1)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Grid;
