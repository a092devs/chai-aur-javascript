class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        return `${this.password}pqr`
    }

    changeUserName () {
        return `${this.username.toUpperCase()}`
    }
}

const a092devs = new User('a092devs', 'a092devs@email.com', '123456789')
console.log(a092devs.encryptPassword());
console.log(a092devs.changeUserName());

// behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const arsalan = new User("arsalan", "arsalan@gmail.com", "123")

console.log(arsalan.encryptPassword());
console.log(arsalan.changeUsername());