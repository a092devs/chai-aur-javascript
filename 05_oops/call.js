function SetUserName (username) {
    // complex DB calls
    this.username = username;
    console.log(`Username is set to ${this.username}`);
}

function createUser (username, email, password) {
    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const a092devs = new createUser('a092devs', 'a092devs@email', '123456789')
console.log(a092devs);