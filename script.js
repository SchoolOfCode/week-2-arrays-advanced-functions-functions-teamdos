console.log('Hello, world!');

//1. **Create a greeting function**

// - Create a function that accepts a name parameter
// - It should log a greeting message using the name

function greeting(name) {
    console.log('Hello, ' + name + '!');
}

// 2. **Create a higher order function**   
function callGreeting(name, nameTwo, nameThree) {
    greeting(name);
    greeting(nameTwo);
    greeting(nameThree);
}
// - Create a function that accepts:
//   - A callback function
//   - Three name parameters
//   - It should call the callback function (in this case, the greeting function we made), passing each name

// 3. **Call the higher order function**

// - Make sure to pass in:   
//   - The callback function 
//   - Three names
// - Check the result, is it what you expected?
console.log(callGreeting('Dani', 'Nath', 'Rowan'));