function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Mpi", hobbies: ["Sports"] }, { age: 30 });
const mergeObjFails = merge({ name: "Mpi", hobbies: ["Sports"] }, 30); // Argument of type 'number' is not assignable to parameter of type 'object'.
console.log(mergeObj.age);

const objectWithSnakeCaseProperties = {
  first_property: "this is the value",
  second_property: "this is the other value",
};

const {
  first_property: firstPropertyAlias,
  second_property: secondPropertyAlias,
} = objectWithSnakeCaseProperties;
console.log(
  `ES lint was screaming at me when I tried to access ${firstPropertyAlias} and ${secondPropertyAlias}`
);
