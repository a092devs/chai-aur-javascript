class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const a092devs = new Teacher("a092devs", "a092devs@teacher.com", "123")

a092devs.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(a092devs instanceof Teacher);
console.log(a092devs instanceof User);