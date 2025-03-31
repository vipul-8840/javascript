class user{
    constructor(username)
    {
        this.username = username;
    }
    logMe()
    {
        console.log(`my name is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username ,email,password)
    {
        super(username);
        this.email = email;
        this.password = password;
    }
}

const obj = new Teacher("vipul","@gmail.com","1234");
obj.logMe();

const obj2 = new user("prashant");
obj2.logMe();
