import { render } from "@testing-library/react";
import Grid from "./Grid";

describe("test grid component", () => {
  let gridProps = {
    rows: 20,
    label: 20,
    id: "test-grid",
  };

  it("should match snapshot", () => {
    const wrapper = render(<Grid {...gridProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Start Next Generation and reset button", () => {
    const { getByText } = render(<Grid {...gridProps} />);
    const startNextGenerationButton = getByText("Start Next Generation");
    const resetButton = getByText("Reset");
    expect(startNextGenerationButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it("Starts Next Generation on click", () => {
    const { getByText } = render(<Grid {...gridProps} />);
    const startNextGenerationButton = getByText("Start Next Generation");
    startNextGenerationButton.click();
    const stopNextGenerationButton = getByText("Stop Next Generation");
    expect(stopNextGenerationButton).toBeInTheDocument();
  });

  it("should render the blank grid", () => {
    const { getByTestId } = render(<Grid {...gridProps} />);
    const grid = getByTestId("test-grid");
    expect(grid).toBeInTheDocument();
  });
});
