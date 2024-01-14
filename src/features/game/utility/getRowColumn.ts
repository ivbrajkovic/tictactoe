export const getRowColumn = (
  index: number,
  columnNumber: number,
): [number, number] => {
  const row = Math.floor(index / columnNumber);
  const column = index % columnNumber;
  return [row, column];
};
