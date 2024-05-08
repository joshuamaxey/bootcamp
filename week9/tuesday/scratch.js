class DynamicArray {

    constructor(defaultSize = 4) {
        this.length = 0;
        this.capacity = defaultSize;
        this.data = Array(this.capacity)
    }

    read(index) {
        return this.data[index];
    }

    unshift(val) {
        for(let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.length++
        this.data[0] = val
    }
}

// If still relevant/of interest, I found this about not using the 'new' keyword:

// (With respect to creating objects in object-oriented languages) "If you omit the new keyword, you won’t create a new object, and you might encounter runtime errors when trying to access methods or properties of an uninitialized reference."

// (With respect to memory allocation and garbage collection) "If you don’t use new properly (or forget to free memory with delete), you risk memory leaks or undefined behavior."

function addNums(arr) {

    let total = 0
    let spaceCounter = 1;
    let nums = [];

    for (let i = 1; i <= arr; i++) {
        nums.push[i]
    }

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }

    console.log(`addNums(): Input size: ${arr.length}, spaceCounter: ${spaceCounter}`)
    return total;
}

//^ O of 1 space complexity (static)

// Don't assume time and space complexity go hand in hand. Memory usage and runtime correspond to different factors that can be independent of one another.

function addFive(arr) {
    let spaceCounter = 0;

    const result = arr.map((el) => {
        spaceCounter++
        return el + 5
    })
    console.log(`addFive(): Input size: ${arr.length}, spaceCounter: ${spaceCounter}`)
    return result
}

//^ Space complexity: O of n (linear)

function nestedPush(arr) {
    let resultArr = [];

    let spaceCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            spaceCounter++
            resultArr.push(i,j)
        }
    }
    console.log(`nestedPush(): Input size: ${arr.length}, spaceCounter: ${spaceCounter}`)
}

//^ space complexity: O of n^2 (quadratic)

let increment = 100
for (let i = increment; i < 10 * increment; i += increment) {
    let arr = [];

    for (let j = 0; j < i; j++) {
        arr.push(j)
    }

    // nestedPush(arr);
    // addFive(arr);
    addNums(arr)
}
