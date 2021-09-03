export const gridContainerStyle = (columns: number) => {
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 20px)`, //This css makes the cells layout in grid
        width: "contain",
        justifyContent: "center"
    }
};
export const cellStyle = (isActive: boolean) => {
    return {
        width: 20,
        height: 20,
        backgroundColor: isActive
            ? "green"   //active cell color
            : "black",  //dead cell color
        border: "solid 1px red",
    }
};