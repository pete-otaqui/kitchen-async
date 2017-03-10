/* eslint-disable no-extraneous-dependencies */
const tape = require('tape');

const kAsync = require('./index');

tape('Handles async value returning', async (t) => {
  t.plan(1);
  const foo = await kAsync.asyncReturn('foo');
  t.equal(foo, 'foo', 'Returned the value');
  t.end();
});

tape('Handles multiple async value returns', async (t) => {
  t.plan(1);
  const arr = [
    await kAsync.asyncReturn('one'),
    await kAsync.asyncReturn('two'),
    await kAsync.asyncReturn('three'),
  ];
  t.deepEqual(arr, ['one', 'two', 'three'], 'All values are awaited');
  t.end();
});

tape('Handles async error throwing', async (t) => {
  t.plan(1);
  // Note that we can't use tape's built-in ".throws()"
  // assertion, because it expects a sync result.
  try {
    await kAsync.asyncThrow();
  } catch (e) {
    t.equal(e.message, 'Async error!', 'Correctly threw an error');
  }
  t.end();
});

