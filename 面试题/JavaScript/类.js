class Animal {
    static a = 1;
    static say() {
        console.log('hello')
    }
    constructor(type, sex, age) {
        this.type = type;
        this.sex = sex;
        this.age = age;
    }

    print() {
        console.log(this.type, this.sex, this.age)
    }

    typeSet(val) {
        this.type = val
    }

    typeGet() {
        return this.type
    }
}

class Tiger extends Animal {
    constructor(type, sex, age) {
        super(type, sex, age);
    }
}

const animal = new Tiger('老虎', 1, 6);
console.log(animal)
console.log(animal.typeGet())