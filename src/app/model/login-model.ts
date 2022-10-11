export class LoginModel {
    username!: string;
    password!: string;
 
    constructor() {}

    get _username(): string {
        return this.username
    }

    get _password(): string {
    return this.password
    }
   
    set _username(username: string) {
    this.username = username;
    }
    set _password(password: string) {
    this.password = password;
    }
}
