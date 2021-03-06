import { blankPuzzle, createPuzzle } from "../puzzles";

const U = undefined;

describe("blankPuzzle", () => {
  test("returns a grid of requested size", () => {
    const p = blankPuzzle(2, 3);

    expect(p.length).toEqual(2);
    expect(p[0].length).toEqual(3);
    expect(p[1].length).toEqual(3);
  });

  test("all squares empty", () => {
    const p = blankPuzzle(2, 3);

    p.forEach(row => {
      row.forEach(square => {
        expect(square.fill).toEqual("empty");
      });
    });
  });

  test("all squares empty", () => {
    const p = blankPuzzle(2, 3);

    p.forEach(rows => {
      rows.forEach(square => {
        expect(square.number).toBeUndefined();
      });
    });
  });
});

describe("createPuzzle", () => {
  test("returns a puzzle with the given numbers", () => {
    const grid = [
      [U, 2, 3],
      [U, U, U],
      [7, U, 9],
    ];
    const p = createPuzzle(grid);

    p.forEach((rows, row) => {
      rows.forEach((square, col) => {
        expect(square.number).toEqual(grid[row][col]);
      });
    });
  });

  test("returns an empty puzzle", () => {
    const p = createPuzzle([
      [U, 2, 3],
      [U, U, U],
      [7, U, 9],
    ]);

    p.forEach((rows) => {
      rows.forEach((square) => {
        expect(square.fill).toEqual("empty");
      });
    });
  });
});
