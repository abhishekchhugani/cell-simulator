import React from "react";
import { numberOfGridRows, numberOfGridColumns } from "./constants";
import Grid from "./components/Grid";

const App = () => {
  return (
    <Grid
      id="cell-simulator-grid"
      rows={numberOfGridRows}
      columns={numberOfGridColumns}
    />
  );
};

export default App;
