console.log('1. Start');

setTimeout(() => {
  console.log('2. Callback from setTimeout');
}, 0);

console.log('3. Synchronous log');

function doSomethingAsync(callback) {
  setTimeout(() => {
    console.log('4. Inside async function');
    callback();
  }, 1000);
}

doSomethingAsync(() => {
  console.log('5. Callback after async function');
});

console.log('6. End of script');
