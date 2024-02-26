const bar = (x) => console.log(`${x} : bar`);
const baz = () => console.log('baz');

const foo = (a) => {
  console.log('foo');
  setTimeout(function() {
    bar(a);
  }, 0);
  baz();
}

foo(2);
foo(1);


/**
1. "foo" (from the first call to foo(2))
2. "baz" (from the first call to foo(2))
3. "foo" (from the second call to foo(1))
4. "baz" (from the second call to foo(1))
5. "2 : bar" (from the setTimeout in the first call to foo(2))
6. "1 : bar" (from the setTimeout in the second call to foo(1))
 */