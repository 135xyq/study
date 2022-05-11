const name = '小王',
    age = 17;
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function() {
        console.log(this.name + "年龄" + this.age)
    }
}

console.log(obj.objAge)
obj.myFun()