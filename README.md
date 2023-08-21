# Refactoring

Refactoring exercise for Node

## Getting started for applicants

Fork this repository to clean up the code and put it in a sensible structure, using the best of idiomatic ES and modern libraries/frameworks possible. The application runs correctly, but there's a lot of duplication and tangling of concerns, and its filtering is limited.

To run:

```
yarn install
yarn dev
```

Browse to [http://localhost:8080](http://localhost:8080)

## Important - the requirements

- The code must run in the latest version of Node
- The code must be able to be built and run with npm commands - no extra scripts or tools that can't be run from what's in `package.json`
- You are welcome to introduce any libraries you feel are useful

## Guidance

There is no "right answer", but some good things to do might be:

- Separate concerns: seperate business logic, web serving, and data access. You want to use framework ? Go ahead, but you'll have to explain your choice.
- Use React or some other single page app framework to avoid having to make page reloads and to generalise the filtering system (e.g. so you can select all people who are both male and 20 years old)
- Use ES6+ features (destructuring, arrow functions,...) to improve the readability, scoping, reuse of the code, or even better, move to TypeScript
- Introduce a module bundler e.g Webpack along with a transpiler to take advantage of even more modern ES features
- Improve the configurability by replacing hardcoded values with appropriate mechanisms for specifying them
- Introduce a linter
- Improve error handling
- Add useful comments
- Add some CSS styling (feel free to use a styling framework or a component library)
- Add logging

## Once you're done

Create a pull request back into this repository and describe, in as much detail as you feel necessary, what you have done to improve this project.
We'll take it from there and review. Show us what you can do!
