class user{
    constructor(name,password)
    {
        this.name = name
        this.password = password
    }

    get password()
    {
        return `${this._password.toUpperCase()}vipul`;
    }
    set password(value)
    {
         this._password = value
    }
}

const obj = new user("vipul","abc");
console.log(obj.password);