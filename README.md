# MpiloTypeScript
My official TypeScript Playground using Node

### When to use Explicitly type (to not rely on inference)
- When a function returns 'any' type and we need to clarify the value
- When we declare a variable on one line and then initialize it later
- When we want a variable to have a type that can't be inferred
- Generally annotate return types of functions to avid forgetting to add a return statement

### Why use a tuple instead of an Array
although we can create an array of mixed types and let TS infer, the problem arises if we need
the order to be fixed, eg our order should be string, number, boolean and don't want the order to be random we then use tuples. 

### when to use
Working with CSVs is a good use case to use Tuples eg to represent the rows. First see if you cant use a object instead because it is more descriptive.
