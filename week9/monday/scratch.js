function addNums(n) {

    let total = 0;

    for(let i = 0; i < n; i++) {
        total += i
    }

    return total;
}

//^ O of n time complexity because the number of operations we have to perform increases as the size of the input (n) increases.

function addManyNums(n) {

    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += addNums(i)
    }

    return total;
}

//^ O of n^2 because this function is effectively a nested loop (a loop which invokes another function, which is a loop). Nested loops don't ALWAYS denote O of n^2 time complexity. But in this case, and in many cases, this is the case.


function addNums10(increment) {

    const result = [];

    let currIncrement = 0

    for (let i = 0; i < 10; i ++) {
        currIncrement += increment;
        let total = addNums(currIncrement)
        result.push(total)
    }

    return result;
}

//^ O(10 * n) == O(n) because we ignore constant values and all values smaller than the largest value.

function addManyNums10(increment) {

    const result = [];

    let currIncrement = 0

    for (let i = 0; i < 10; i ++) {
        currIncrement += increment;
        let total = addManyNums(currIncrement)
        result.push(total)
    }

    return result;

}
