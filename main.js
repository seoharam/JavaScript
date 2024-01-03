// Possible completely checking code
'use strict'

// class parent
class Person {
    // attribute
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    // function 1
    show_info(){
        console.log(`${this.name} is ${this.age} years old. He(She) lives in ${this.city}`)
    }

    // function 2
    is_order_than(value){
        if (this.age > value){
            return true;
        }
        else {
            return false;
        }
    }

    // function 3
    add_city_info(_city){
        this.city = _city
    }
}

// class child
class Student extends Person{
    constructor(_name, _age, _dream) {
        // be inherited Person's attribute with super
        super(_name, _age)
        this.dream = _dream
    }

    show_info(){
        // be inherited Person's function with super
        super.show_info()
        console.log(`His(Her) dream is ${this.dream}`)
    } 
}


// create class object
const p = new Person('jim', 20)
p.add_city_info('Seoul')
const q = new Person('jane', 21)
q.add_city_info('Busan')
const s = new Student('tom', 19, 'pilot')
s.add_city_info('incheon')
s.show_info()
