# Test-Driven Development (TDD)
## Overview

Test-Driven Development (TDD) is a technique for building software that guides software development by writing tests. Specifically, TDD uses a 3 step loop:

1. **Red** - Introduce a test for desired functionality that fails (or doesn't compile)
2. **Green** - Modify code to make new and existing tests pass, committing whatever sins necessary in the process to accomplish this quickly
3. **Refactor** - Take time to make the code good

![tdd life cycle](/img/article/tdd-life-cycle.png)

### Why TDD

Test Driven Development helps improve test coverage and breaks development into smaller manageable chunks. This reduces errors in production and encourages consistent developer velocity. Additionally, it helps engineers develop testable code because you are writing tests first. Built-in refactoring cycles provide an opportunity to make the code readable and help prevent technical debt from piling up and becoming unmanageable. TDD also helps with the following:

* TDD introduces incremental checkpoints and a sense of gamification to development, where developers are motivated by a challenge reward cycle
* Writing failing test first ensures you don't have false positives
* Tests act as living documentation of implemented functionality

## TDD: Red-Green-Refactor loop breakdown

### Red - Test Fails

Introduce a test for desired functionality that fails (or doesn't compile)

* Focus on meaningful tests, don't test the language
* Find the right scope: can introduce multiple tests at a time, but make sure they are similar in scope
* Use testing framework tools to disable tests until ready to implement
* Write tests for new functionality incrementally, build up test complexity
* Test interfaces instead of implementation

### Green - Test Passes

Modify code to make new and existing tests pass, committing whatever sins necessary in the process to accomplish this quickly

* Do what is easiest to pass the tests
* It's okay to take shortcuts, hard code values, etc.
* Implement only against test cases and make note of future test cases to write
* Implementation must make old and new tests pass

### Blue - Refactor

This is the most important part of TDD: we now have some working code with tests that should test the behavior!

90% of the time is spent reading code only 10% writing it.  If we want to go faster, then making the code easy to read would seem to be the obvious place. So why don't we clean up code that we know is messy? **Is it because we're afraid we'll break it?**

But if we have the tests, we can:

* Be reasonably sure that the code is not broken, or that we'll detect the breakage immediately.
* Become fearless about making changes.
* Clean messy code or unclean structure without fear
* Make code malleable again.
* Make software becomes soft again

**Take time to make the code GREAT!**

When it is time to clean the code, please consider the following activities:

* Remove duplication (DRY)
* Sanitize code smells
* Apply patterns and idioms
* Ensure comments for readability (but remember comments degrade faster than code - can we re-write in a way that avoids the need for a comment)
* Lint and format for syntax and style
* Make variable and method names consistent and meaningful
* Refactor for appropriate time complexity

### What to Test

Write simple tests first and build up in complexity

* **Trivial:** Start with the simplest functionality. What happens when you call methods with default arguments? Zero? Empty?
* **Functional:** Focus on happy path next. What is the core business logic?
* **Edge Cases:** Consider all possible scenarios. Are there boundary conditions?
* **Errors:** What happens when things break? Are errors and invalid inputs handled?

Also clean up trivial tests, those that test the language or 3rd party libraries should have their own tests!

#### Remember the good qualities

1. They protect against regression
2. They are not resistant to code refactoring
3. They provide fast feedback
4. They are maintainable

Do not test trivial code, typical examples not to test:

* A getter that returns a count from a list / map / set - that the count works, you do not need to test the language
* Pojo using a library like Lombok to generate the getters and setters.

### And finally

**Pair Programming -** pair with a teammate and switch off between writing tests and implementing functionality

**Peer Reviews -** formalize feature requirements as a set of test cases, PR for shared understanding before implementing against those tests

### TDD is an investment

As with any new learning, TDD may feel slower at first, but in return long term velocity increases:

* There is an initial friction to learning and applying the methodology
* Requires a different mindset
* Leads to writing more tests and doing more refactoring than before
* Less production errors. Less rework

<!-- ## Additional Resources

* [YouTube - DevTernity 2017: Ian Cooper - TDD, Where Did It All Go Wrong](https://www.youtube.com/watch?v=EZ05e7EMOLM)
* [YouTube - DEVOXX 2017: Effective Unit Testing by Eliotte Rusty Harold](https://www.youtube.com/watch?v=fr1E9aVnBxw)
* [Book - Test Driven Development](https://www.goodreads.com/book/show/387190.Test_Driven_Development)
* [Kata-log - Katas to learn on TDD](https://kata-log.rocks/tdd) -->
