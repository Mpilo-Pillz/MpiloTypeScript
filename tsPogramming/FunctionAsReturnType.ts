const chooseStepFunctionAnother: (
  backward: boolean
) => (input: number) => number = (backward: boolean) => {
  const stepForward: (input: number) => number = (input: number) => ++input;
  const stepBackward: (input: number) => number = (input: number) => {
    return --input;
  };

  return backward ? stepBackward : stepForward;
};

let currentValueAnother = -20;
const moveNearerToZeroAnother = chooseStepFunctionAnother(
  currentValueAnother > 0
);

while (currentValueAnother !== 0) {
  console.log(`${currentValueAnother}...`);
  currentValueAnother = moveNearerToZeroAnother(currentValueAnother);
}

console.log("Zero");
