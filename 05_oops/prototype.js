// let myName = 'arsalan      '
// let myUserName = 'a092devs      '

// console.log(myName.length);

let myHeros = ['batman', 'superman']

let heroPower = {
    batman: 'smart',
    superman: 'fly',

    getSuperManPower: function () {
        console.log(`Superman can ${this.superman}`);
    }
}

Object.prototype.arsalan = function () {
    console.log(`Arsalan is present in all objects`);
}

Array.prototype.heyArsalan = function () {
    console.log(`Arsalan says hey to all arrays`);
}

// heroPower.arsalan()
// myHeros.arsalan()
// myHeros.heyArsalan()
// heroPower.heyArsalan()

// inheritance
const User = {
    name: 'Arsalan',
    email: 'arsalan@email.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'arsalan         '

String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`True length of ${this} is: ${this.trim().length}`);
}

anotherUserName.trueLength()
'arsalan'.trueLength()
'coldCoffee'.trueLength()