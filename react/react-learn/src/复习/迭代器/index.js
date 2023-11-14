const iterator = {
    total:3,
    i:1,
    next(){
        const obj = {
            next:this.i,
            done:this.i > this.total
        }
        this.i++;
        console.log(obj)
        return obj;
    }
}