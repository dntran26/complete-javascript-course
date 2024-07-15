'use strict';

/*
/////////////////////////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
/////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2345455456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2345455456) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
/////////////////////////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// My own example of higher-order function

const double = function (num) {
  return num * 2;
};

const square = function (num) {
  return num * num;
};

const mapArray = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

console.log(mapArray(numbers, double));
console.log(mapArray(numbers, square));

// Another example of higher-order function

const upperCase = function (str) {
  return str.toUpperCase();
};

const reverseStr = function (str) {
  const splitString = str.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
};

const transformArray = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const words = ['hello', 'world', 'javascript', 'higher', 'order', 'functions'];

console.log(transformArray(words, upperCase));
console.log(transformArray(words, reverseStr));
*/

/*
/////////////////////////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const long = x1 => x2 => x3 => x4 => x5 => x6 => x7 => x8 => x9 => x10 =>
  console.log(`${x1} ${x2} ${x3} ${x4} ${x5} ${x6} ${x7} ${x8} ${x9} ${x10}`);

long('Why')('am')('I')('doing')('this')('with')('my')('precious')('time')('?');
*/

/*
/////////////////////////////////////////////////////////
// The Call, Apply and Bind Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Danny Tran');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// The Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Danny Tran');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.05);
// addGST = value => value + value * 0.05;

console.log(addGST(100));
console.log(addGST(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addGST2 = addTaxRate(0.05);
console.log(addGST2(100));
console.log(addGST2(23));
*/
