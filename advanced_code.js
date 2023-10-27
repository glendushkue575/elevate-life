/* advanced_code.js */

// This code generates a maze using a randomized Prim's algorithm

// Define the dimensions of the maze
const WIDTH = 31;
const HEIGHT = 31;

// Define the possible directions for each cell
const DIRECTIONS = {
  NORTH: [0, -2],
  SOUTH: [0, 2],
  EAST: [2, 0],
  WEST: [-2, 0]
};

// Initialize the grid and stack
const grid = [];
const stack = [];

for (let i = 0; i < HEIGHT; i++) {
  grid[i] = [];
  for (let j = 0; j < WIDTH; j++) {
    grid[i][j] = {
      visited: false,
      walls: [true, true, true, true]
    };
  }
}

// Randomized Prim's algorithm to generate the maze
const currentCell = grid[1][1];
currentCell.visited = true;
stack.push(currentCell);

while (stack.length > 0) {
  const neighbors = [];

  for (let direction in DIRECTIONS) {
    const [dx, dy] = DIRECTIONS[direction];
    const nextY = currentCell.y + dy;
    const nextX = currentCell.x + dx;

    if (nextY < 0 || nextY >= HEIGHT || nextX < 0 || nextX >= WIDTH)
      continue;

    neighbors.push(grid[nextY][nextX]);
  }

  const unvisitedNeighbors = neighbors.filter(
    neighbor => !neighbor.visited
  );

  if (unvisitedNeighbors.length > 0) {
    const randomIndex = Math.floor(
      Math.random() * unvisitedNeighbors.length
    );
    const randomNeighbor = unvisitedNeighbors[randomIndex];

    stack.push(randomNeighbor);

    const [gx, gy] = [
      randomNeighbor.x - currentCell.x,
      randomNeighbor.y - currentCell.y
    ];

    currentCell.walls[(gx + 1) / 2 + (gy + 1) / 2 * 2] = false;
    randomNeighbor.walls[(-gx + 1) / 2 + (-gy + 1) / 2 * 2] = false;

    randomNeighbor.visited = true;
    currentCell = randomNeighbor;
  } else {
    currentCell = stack.pop();
  }
}

// Generate the maze layout using ASCII characters
let maze = "";

for (let i = 0; i < HEIGHT; i++) {
  for (let j = 0; j < WIDTH; j++) {
    const cell = grid[i][j];

    if (cell.walls[0]) maze += "███";
    else maze += "   ";

    if (cell.walls[1]) maze += "███";
    else maze += "   ";

    if (cell.walls[2]) maze += "███";
    else maze += "   ";

    if (cell.walls[3]) maze += "███";
    else maze += "   ";
  }

  maze += "\n";
}

console.log(maze);