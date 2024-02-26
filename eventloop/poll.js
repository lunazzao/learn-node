const fs = require('fs');

function someAsyncOperation() {
  fs.readFile('/path/to/file', function(err, data) {
    if (err) console.log('Read Error');
    else console.log('Data: ' + data);
  });
}

function foo() {
  console.log('foo');
}

someAsyncOperation();
foo();
console.log('done');

/**
"foo" (from the call to foo())
"done" (from the console.log('done'); immediately after calling foo())
"Read Error" or "Data: " + data (from the callback of fs.readFile in someAsyncOperation(), 
executed after the file read operation completes)
 */