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



let productsArray = [
    {
      product: 'Shoes',
      price: 25
    },
    {
      product: 'Hat',
      price: 5
    },
    {
        product: 'Shirt',
        price: 20
    },
    {
        product: 'Trousers',
        price: 24
    },
    {
        product: 'Coat',
        price: 50
    },
    {
        product: 'Jumper',
        price: 30
    }
  ]

  const addVAT = productsArray.map((product) => ({
    product: product.product, 
    price: product.price * 0.8
}));

    console.log(productsArray);
    console.log(addVAT);

   
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNum = numArray.map(numArray => numArray * 2);
console.log(doubleNum);
console.log(numArray);


//- Initialize an array of strings
const stringArray = ['Helloooooooooooo', 'World', 'I', 'am', 'a', 'string!'];

//- Create a function that accepts a string parameter
function stringLength(string) {
    return string.length > 1;
}

//- It should return true if the string length is greater than 5   
//- Use the filter method to filter out the strings with a length greater than 5
const joined = stringArray.join(' ');
const concat = stringArray.concat('Hello', 'World');
const longString = stringArray.filter(stringLength);
console.log(longString);
console.log(joined);    
console.log(concat);

const slice = stringArray.slice(2, 4);
console.log(slice);

const index = stringArray.indexOf('World');
console.log(index);

const includes = stringArray.includes('World');
console.log(includes);

const reduceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduced = reduceArray.filter((number) => number < 5).map(reduceArray => reduceArray * 10).reduce((prev, curr) => prev * curr);

console.log(`The old array is ${reduceArray}`);
console.log(`The new array is ${reduced}`);

