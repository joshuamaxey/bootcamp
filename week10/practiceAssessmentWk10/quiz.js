//& 1. Which of the following are equal to OxC9?

//* 1. 0x00C9 (yes, calling 'hexadecimalToDecimal('0x00C9') returns 201, the same as calling it on '0xC9')
//! 2. 0b11101001 (no, calling 'decimalToBinary(201)' returns 0b11001001, not 0b11101001)
//! 3. "C9" (yes, calling 'decimalToHexadecimal(201)' returns 'C9', which is 0xC9 without the prefix) NOPE, apparently this is incorrect even though our function returned it.
//* 4. 201 (yes, calling 'hexadecimalToDecimal('0xC9')' returns 201)

//& 2. Which of these best describes a pointer?

// 1. A data structure that indicates the head of a linked list //^ unlikely, the pointer does not necessarily have to point to the head node.
// 2. A memory cache //^ Also unlikely, a cache is a data structure that usually takes the form of an object
// 3. A byte vaue that indexes a location in memory //* Seems most likely to me. The operational definition of a 'pointer' with respect to linked lists in javascript is 'a reference to another node.' Of course, as usual, there are no answers which reflect any of the operational definitions provided online. But I guess this is the closest one?
// 4. A data structure that stores a single byte of memory //^ Unlikely, a pointer stores more than a single byte of memory. I"m pretty sure.

//& 3. Which of the following descries the order values are added and retrieved fro a stack?

//* LIFO (last in, first out) && FILO (first in, last out).

//& 4. What are the three requirements that allow array values to be indexed in constant time?

// 1. Stores values of the same data type //^ This is true
//! 2. Indexed using a hash/modulo function (this is a characteristic of a hash table. It is possible that I'm wrong about this and the answer will return, 'arrays are hash tables under the hood,' but i don't think that this is the reason for arrays being indexed in constant time.)
// 3. Occupies a contiguous block of memory //^ this is also true, and I think it pertains to the speed at which arrays can be indexed
// 4. Stores elements in sequential order //^ this is also true, and I also think it pertains to the speed at which arrays can be indexed.

//& 5. Which of the functions below has the worst space complexity?

function first(n) {
    if (n < 0) return;

    console.log(n);
    first(n - 1);
}

function second(n) {
    arr = [];

    for (let i = 0; i <= n; i++) {
        arr.unshift(i);
    }

    console.log(arr.join('\n'))
}

//^ since we're asking about SPACE complexity, NOT time complexity, I'd say that second(n) has the worst efficiency. This is because it creates and then stores values in an array. first(n) [thoguh it's recursive and thus probably has terrible time complexity] stores no variables and utilzes no data structures, so it seems like its space complexity would be the better of the two.

//! NOPE, apparently these both have the same space complexity. The first 'comes from space on the call stack'

//& 6. What is the time complexity of arrayNums(n)?

function arrayNums(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.unshift(i)
    }

    return arr;
}

//^ A for loop is an O(n) operation. So is unshift. Because we prform unshift [O(n)] within the loop, which means that it is executed for each element of the array, the two O(n) time complexitis compound to produce an overall time complexity of O(n^2). I think.

//& 7. What are the truth table values for [ A && (!A || !B) ]


// A	B	A && (!A || !B)

// 0	0	? //^ 0
// 0	1	? //^ 0
// 1	0	? //^ 1
// 1	1	? //^ 0

//* 0010

//& 8. What is the worst-case time complexity of array.push() in a dynamic array and what causes it?

// In most cases, array.push() is an O(1) operation. The worst-case time complexity of array.push() is O(n) because we may have to reallocate memory for a largery array and then copy the existing elements to the new array.

//& 9. how many bits  are in 10 kilobytes?

// 1 byte = 8 bits
// 1 kilobyte = 1000 bytes
// 10 kilobyte = 10000 bytes = //* 80000 bits

//& 10. What is the time complexity of timesThreePlusTen?

function timesThreePlusTen(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        total++;
    }

    for (let j = 0; j < n; j++) {
        total++;
    }

    for (let k = 0; k < n; k++) {
        total++;
    }

    for (let l = 0; l < 10; l++) {
        total++;
    }

    return total;
}

//^ Despite that this function unecessarily uses an excessive number of loops, none of them are nested. For this reason and since we ignore any constant coefficients when calculating time complexity, I believe that this function has O(n) time complexity.

//& 11. Which of the following describes the order values are added and retrieved from a queue?

//* FIFO and LILO (first in first out, last in last out)

//& 12. Which of these are advantages of singly-linked lists over doubly-linked lists?

//! 1. Improved time complexity to remove the head (no, removeFromHead has time complexity of O(1) for both singly and doubly-linked lists. I think.)
//* 2. Simpler code (this is just a reality that there is less code in a singly-linked list and less to consider than in a doubly-linked list. Could be wrong though.)
//* 3. Less memory (yes, when we make a doubly-linked list we are sacrificing space to improve time complexity. This means that singly-linked lists take less space. I think.)
//! 4. Improved time complexity to remove the tail (no, doubly-linked lists are faster for this because they have a tail node and do not need to traverse the entire linkedList)

//& 13. What is the worst-case time complexity of a lookup in a hash table and why?

// Regularly hash tables provide a constant O(1) lookup time. BUT they can be reduced to a worst-cas lookup time of O(n). This is because of collision handling (if multiple elements hash to the same key, looking inside that key may take O(n) time because we'll have to traverse a linked list) and Load balancing rehashing (if the hash table exceeds its load balance, it needs to rehash, which invovles creating a new, larger table and then re-inserting each element. THis is an O(n) operation).

//^ The closest option to this answer is: "O(n), if every key in the hash tabl happens to collide in the same bucket." but because of this scenario is an extreme, I think it might be the wrong answer.

//& 14. What happens when you add two different values with the same key into a hash table?

//^ Best answer based on my understanding is "a hash collision will occur, with the second value accessible via a linked list" (this is how we've handled hash collisions)

//! NOPE, apparently it's not a hash collision unless two different keys have the same hash/modulo output. If the keys are the same, the fist value is overwritten.
