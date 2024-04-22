/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Like the built in Array#slice, it should include the
		"start" index and exclude the "end" index. Do not use the built-in Array#slice method.

    If the start index is less than 0, the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
		slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(1, 3);
    console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

    const slicer2 = dynamicSlice(2, 7);
    console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

		const slicer3 = dynamicSlice(-10, 2);
    console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
*/

// return a function that accepts an array as an argument
// new function should return a COPY of a portion of the array between the start and end arguments of the first function
// new function's copy of the array should include the start and exclude the end.

// if the start index is less than 0, the returned function should slice from the beginning of the array.
// if the end index is greater than the length of the array, return functio should slice up to the end of the array.

function dynamicSlice(start, end) {

  return function(arr) {
    const length = arr.length;

    let startIndex;

    if (start < 0) { // if 'start' < 0, set the starting index to 0.
      startIndex = 0;
    } else { // if start is NOT < 0, set starting index equal to 'start'
      startIndex = start;
    }

    let endIndex;

    if (end > length) { // if 'end' is greater than the length of the array, let ending index = length of the array.
      endIndex = length;
    } else { // if end is NOT greater than the length of the array, set the ending index to 'end'
      endIndex = end;
    }

    let result = [];

    for (let i = startIndex; i < endIndex; i++) { // here, we loop through the array beginning and ending at the indices specified by the 'startIndex' and 'endIndex' variables.
      result.push(arr[i]); //We push the element located at the current index to the 'result' array.
    }
    return result; // finally, we return the new 'result' array.
  };
}

// function dynamicSlice(start, end) {
//   return function (arr) {
//     let newArr = [];
//     if (arr[start] < 0) {
//       for (let i = 0; i < arr[end]; i++) {
//         newArr.push(i);
//       }
//     }
//     return newArr;

//   }

    // return function (arr) {
    //   if (arr[start] > 0) {
    //     if (arr[end] <= arr.length) {
    //       let newArr = [];
    //       for (let i = arr[start]; i < arr[end]; i++) {
    //         newArr.push(arr[i]);
    //       }
    //       return newArr;
    //     } else if (arr[end] > arr.length) {
    //       let newArr = [];
    //       for (let i = arr[start]; i < arr.length; i++) {
    //         newArr.push(arr[i]);
    //       }
    //       return newArr;
    //     }

    //   }
    //   if (arr[start] < 0) {
    //     let newArr = [];
    //     for (let i = 0; i < arr[end]; i ++) {
    //       newArr.push[arr[i]];
    //     }
    //   }

    // }
// }

const slicer = dynamicSlice(1, 3);
console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

const slicer2 = dynamicSlice(2, 7);
console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

const slicer3 = dynamicSlice(-10, 2);
console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}
