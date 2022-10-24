const chooseStepFunctionAnother: (
  backward: boolean
) => (input: number) => number = (backward: boolean) => {
  const stepForward: (input: number) => number = (input: number) => ++input;
  const stepBackward: (input: number) => number = (input: number) => {
    return --input;
  };

  return backward ? stepBackward : stepForward;
};
