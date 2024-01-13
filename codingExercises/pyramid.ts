"  #  ";
" ### ";
"#####";

function pyramid(num: number) {
  const midPoint = Math.floor((2 * num - 1) / 2);

  for (let row = 0; row < num; row++) {
    let level = "";

    for (let col = 0; col < 2 * num - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

pyramid(5);

// find mid point
// colum less than double the number -1
// take midpoint subtract row check if its less than column
// take midpoint and add row and check if its more than column

function revisePyramid(numOfSteps: number) {
  const midPoint = Math.floor((2 * numOfSteps - 1) / 2);

  for (let row = 0; row < numOfSteps; row++) {
    let step = "";
    for (let column = 0; column < 2 * numOfSteps - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

revisePyramid(10);
