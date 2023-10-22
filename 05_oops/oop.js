const user = {
    username: 'a092devs',
    loginCount: 5,
    signedIn: true,

    getUserDetails : function () {
        // console.log(this);
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greetings = function(){
        console.log(`Hello ${this.username}, Welcome back!`);
    }

    return this;
}

const userOne = new User('a092devs', 3, true);
const userTwo = new User('arsalan', 8, true);
console.log(userOne.constructor);
// console.log(userTwo);