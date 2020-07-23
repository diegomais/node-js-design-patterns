# How to contribute

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to this project and its packages, which are hosted [diegomais](https://www.linkedin.com/in/diegomais/). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## To do

- [ ] **Create a Monorepo with Yarn Workspaces**: In this project we have different domains in each Design Pattern and using a monorepo with Yarn Workspaces we could separate each Design Pattern into different modules.
- [ ] **Add problem solve and not just pattern**: Design Pattern is a solution that help to resolve one or more problems. It will be interesting to shown for each implementation what problem is solved. For example state machine for product where state depends on some conditions.
- [ ] **Implement tests**: Testing is necessary because we all make mistakes. Some of those mistakes are unimportant, but some of them are expensive or dangerous. We need to check everything and anything we produce because things can always go wrong – _humans make mistakes all the time_.
- [ ] **Implement continuous integration**: Establish a consistent and automated way to build, package, and test application and its modules.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Consider starting the commit message with an applicable emoji:
  - :art: `:art:` when improving the format/structure of the code
  - :racehorse: `:racehorse:` when improving performance
  - :non-potable_water: `:non-potable_water:` when plugging memory leaks
  - :memo: `:memo:` when writing docs
  - :penguin: `:penguin:` when fixing something on Linux
  - :apple: `:apple:` when fixing something on macOS
  - :checkered_flag: `:checkered_flag:` when fixing something on Windows
  - :bug: `:bug:` when fixing a bug
  - :fire: `:fire:` when removing code or files
  - :green_heart: `:green_heart:` when fixing the CI build
  - :white_check_mark: `:white_check_mark:` when adding tests
  - :lock: `:lock:` when dealing with security
  - :arrow_up: `:arrow_up:` when upgrading dependencies
  - :arrow_down: `:arrow_down:` when downgrading dependencies
  - :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [Airbnb JavaScript Style Guide() {](https://github.com/airbnb/javascript).

- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- Inline `export`s with expressions whenever possible

  ```javascript
  // Use this:
  export default class ClassName {}

  // Instead of:
  class ClassName {}
  export default ClassName;
  ```

- Place requires in the following order:
  - Built in Node Modules (such as `path`)
  - Local Modules (using relative paths)
- Place class properties in the following order:
  - Class methods and properties (methods starting with `static`)
  - Instance methods and properties

### Tests Styleguide

- Include thoughtfully-worded, well-structured [Jest](https://jestjs.io/) tests.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.

#### Example

```javascript
describe 'a dog', ->
 it 'barks', ->
 # test here
 describe 'when the dog is happy', ->
  it 'wags its tail', ->
  # test here
```

#### Where to put test files

Unit tests run against specific lines of code. So it makes sense to place them right next to that code.

```
|- /main
| |- index.js
| |- index.spec.js
```

Integration tests run against many lines of code in many files. There is no single place that would make sense, so it’s best to have them in a `/__tests__` directory.

```
|- /main
|- /__tests__
| |- /int
| | |- api.int.spec.js
| |- index.js
|- /supporting
| |- fetch.js
```

#### How to name test files

Naming every level of test `\*.spec.js` doesn’t make much sense. So include the type of test right in the name of the file.
Example: `index.unit.spec.js` and `api.int.spec.js`

---

Made with :blue_heart: by [Diego Mais](https://diegomais.github.io) :wave:
