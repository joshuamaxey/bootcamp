//! Arrays and Stacks Objectives

    // 1. Compare and contrast the properties and operations of an array. linked list, and hash table
    // 2. Identify the mechanics and complexity of adding and removing elements from arrays
    // 3. Solve the memory equation to retrieve data from an array
    // 4. Describe the resizing property of dynamic arrays and why it's necessary
    // 5. Implement a stack using an array
    // 6. Select an array or stack as the right tool for solving a problem

//! Arrays: Under the Hood

//^ Arrays are overall the ost time and space efficient way to store data.

//! What is an Array?

//^ An array is a sequence of elements of the same type stored in a contiguous block of memory

//! Array Representation in Memory

// Consider the following array of 32-bit integers:

let arr = [255, 256, 43690, 1431655765]

// Since these are '32-bit integers' (whatever the fuck that means), each number requires FOUR bytes of storage space. All numbers take up the same amount of space (FOUR BYTES) regardless of the size of the integer.

// Therefore storing these four integers requires 16 BYTES of memory.

// So when line 22 runs, it requrests 16 bytes of memory from the OS. The OS then returns a memory address with read/write access to the 16 BYTES.

//*     104      105      106      107
//*     00000000 00000000 00000000 00000000

//*     108      109      110      111
//*     00000000 00000000 00000000 00000000

//*     112      113      114      115
//*     00000000 00000000 00000000 00000000

//*     116      117      118      119
//*     00000000 00000000 00000000 00000000

//^ This is what our 16 bytes of memory look like if they're completely empty.

// Because computer memory is binary, the values 4 values must be translated from base-10 (Decimal notation, the way that we typcially read and write numerical values) to base-2 (binary notation):

//*        255 ---> 00000000 00000000 00000000 11111111
//*        256 ---> 00000000 00000000 00000001 00000000
//*      43690 ---> 00000000 00000000 10101010 10101010
//* 1431655765 ---> 01010101 01010101 01010101 01010101

//^ Here, we translate our four numbers from base-10 to base-2. Notice how our base-2 numbers occupy 16 bytes of space, exactly the amount that the OS allocated to us for the purpose of storing the values in the array on line 22.

// After translation, our values can be written into the memory that has been allocated to the array:

//* 104      105      106      107
//* 00000000 00000000 00000000 11111111

//* 108      109      110      111
//* 00000000 00000000 00000001 00000000

//* 112      113      114      115
//* 00000000 00000000 10101010 10101010

//* 116      117      118      119
//* 01010101 01010101 01010101 01010101

//^ This is what our memory slots (the same as line 30 - 40 above) look like after we've translated our numbers to base-2 and then copied them over.

//! Array Indexing

// Arrays are the most space-efficient way to store data

//^ Arrays also allow the fasted access to data through indexing.

// Lets look at our array again:

arr = [255, 256, 43690, 1431655765];

// What do we do if we want to access the third element in this array?

// Indexes start at 0, so we would call arr[2]:

console.log(arr[2]); // prints our value: 43690

//^ Whenever we access any certain element of an array at a given index, our code runs this equation:

//& valueAddress = startAddress + index * sizeof(dataType)

//^ In our example:

    //& The array starts at memory address 104
    //& The index is 2
    //& the dataType size is 4 bytes (32-bit)

// So when we plug into our equation, we get...

//& valueAddress = 104 + 2 * 4

//^ 104 + 2 * 4 simplifies to 112, which is the 'valueAddress' (the memory address) where our third value, 43690, is located (in its binary form)

// Because indices are located in this way (based on the startAddress), the entire array must be located in a contiguous block of memory in order for our formula to work.

// Similarly, since the offset is calculated based on (multiplying) the data size, all items in the array must be of the same data type.

// And finally, sice indices are numerical, the array must be stored in an ordered sequence.

// Thus, we have our definition:

//^ An array is a sequence of elements of the same type stored in a contiguous block of memory

// All characteristics of this definition are necessary in order to achieve the O(1) indexing speed of our equation.

//^ In summary:

// Since indices are located based on the offset, the entire array must occupy a contiguous block of memory. Since the offset is calculated based on data size, all items in the array must be of the same data type. And since the indices are numerical, the array must be stored in an ordered sequence.

//! Arrays in Different Programming Languages

// In JavaScript, elements in an array are stored as generic data objects and their type and value is interpreted at runtime. The array itself contains only a sequence of pointers (memory addresses), which all have the same data size. This is how JavaScript is able to store multiple data types in arrays.
