// '#   ' row = 0 column = row
// '##  'row = 0 column <= row
// '### '
// '####'

/**
 * #
 * n = 4
 * row = 0
 * col = 0
 *
 * blank
 * row = 1
 * col = 0
 * col = 1
 * col <= row - col
 * n
 *
 * #
 * ##
 * n = 2
 * row = 0
 * col = 1 - col < n
 */

function steps(num: number) {
  // keep looping
  for (let row = 0; row < num; row++) {
    let step = ""; // keep adding
    for (let col = 0; col < num - 1; col++) {
      if (col < row) {
        step += "#";
      } else {
        step += "";
      }
    }
    console.log(step);
  }
}

steps(5);
