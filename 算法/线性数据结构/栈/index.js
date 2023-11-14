function Stack() {
    this.arr = [];
    this.pop = function() {
        this.arr.pop();
    };
    this.push = function(item) {
        this.arr.push(item);
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()

console.log(stack.arr)