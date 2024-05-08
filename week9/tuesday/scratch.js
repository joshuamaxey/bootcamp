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
