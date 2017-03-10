# Kitchen Async

![Build Status](https://travis-ci.org/pete-otaqui/kitchen-async.svg)

A little experiment in writing tests with [tape](https://github.com/substack/tape) with ES7 `async` and `await`.

Note that tape's `.throws()` and `.doesNotThrow()` assertions are not compatible with `async` and `await`.
