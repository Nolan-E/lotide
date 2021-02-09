# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install Lotide:**

```shell
npm install @ballsy/lotide
```
**Require Lotide:**

```javascript
const _ = require('@ballsy/lotide');
```

**Call Lotide:**
```javascript
const results = _.tail([1, 2, 3]) // => [2, 3]`
```

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Strictly compares input array to the expected output array. Logs the pass or fail to the console.
* `assertEqual(actual, expected)`: Stricly compares input primitive values to the expected output. Logs the pass or fail to the console.
* `assertObjectsEqual(actual, expected)`: Stricly compares input primitive values to the expected output. Logs the pass or fail to the console.
* `eqArrays(Arr1, Arr2)`: Strictly compares two input arrays. Returns true or false.
* `eqObjects(object1, object2)`: Strictly compares two input objects. Returns true or false.
* `countLetters(str)`: Takes and input string and returns the number of letters & characters, less the whitespace.
* `countOnly(allItems, itemsToCount)`: Takes an input array and an object populated with the elements to be counted (if truthy) or not (if falsey).Returns an object with the results.
* `findKey(object, callback)`: Takes an object and function to execute it. Searches for a key in the object that matches the conditions given and returns the first key name found that matches.
* `findKeyByValue(obj, value)`: Takes an object and a value to search for. Searches for a key in the object that matches the specified value.
* `flatten(source)`: Takes a source array with a nested array and returns a single "level" array. (Not recursive. Only a single level of nesting can be flattened at a time.)
* `head(Arr)`: Takes an array and returns the element at the first index.
* `letterPositions(str)`: Takes a string and returns an object with the index of each occurrence of each character in the string. Occurrence of whitespace is not returned.
* `map(array, callback)`: Takes an array and a function to be executed on the array. Returns a new array with the results.
* `middle(array)`: Takes an array and returns the value at the middle index position. Returns two values if the length of the array is even.
* `tail(Arr)`: Takes an array and returns it without the element at the first index of the input array.
* `takeUntil(array, callback)`: Takes an array and a function to be executed on it. Loops over the array and returns it as is until it hits the break condition of the callback.
* `without(source, itemsToRemove)`: Takes a source array and array of unwanted items. Returns a new array with only those elements from the source array which are NOT present in the itemsToRemove array. Stricly compares the values between both arrays.
