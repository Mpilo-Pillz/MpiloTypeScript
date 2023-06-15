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

### Modifiers
<strong>public</strong> Can be called anywhere anytime
<strong>private</strong> Can only be called by other methods in the same class
<strong>protected</strong> Can be called by others methods in the same class or by other methods in child classes


### run parcel
`parcel index.html` or `npx parcel index.html`


### some naming conventions
- when we have a file whose primiary purpose is create and export a class use propper case to name the file
- files that export plain objects, constants or functions or files that are the root o the application will be lowercase