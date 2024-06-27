class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {

    return this.data[index];
  }

  push(val) {

    this.data.length++

    this.data[this.data.length - 1] = val;

    return this.data.length;
  }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
