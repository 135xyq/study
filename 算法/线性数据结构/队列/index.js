function Queue() {
    this.arr = [];
    this.pop = function() {
        this.arr.shift();
    }
    this.push = function(item) {
        this.arr.push(item)
    }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

queue.pop()
console.log(queue.arr)