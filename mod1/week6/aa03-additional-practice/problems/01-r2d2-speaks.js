/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
    if (code.length === 0) { // This is our base case. It tests to see if there are no more elements left in the array.
        return; // If no elements remain, then we have reached our base case and we return, ending the function.
    }

    const [num, ...restOfNums] = code; // Here, we destructure the array. This serves TWO functions: 1. We separate the first value from the rest so that we can use that first value to determine what happens next. 2. We create an array that includes every element EXCEPT for the first element, making this our recursive step (which moves us closer to our base case).

    if (num === 0) { // Here, we check to see if 'num' (the first element in the code array) is 0.
        console.log("beep") // if it is, we console.log "beep" per the instructions

        setTimeout(() => { // THEN we call the setTimeout function.
            r2d2Speaks(restOfNums); // setTimeout recursively cals the r2d2Speaks function on the new, shorter array.
        }, 400); // setTimeout waits 400ms before making the recursive call, per the instructions.
    }

    else if (num === 1) { // If 'num' (the first element in the code array) is NOT 0, we check to see if it is 1.
        console.log("boop") // If num is 1, we console.log "boop" per the instructions.

        setTimeout(() => { // Then we call the setTimeout function.
            r2d2Speaks(restOfNums); // The setTimeout function recursively calls the r2d2Speaks function on the shortened array
        }, 800); // setTimeout waits 800ms in this scenario before making the recursive call, per the instructions.
    }
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
