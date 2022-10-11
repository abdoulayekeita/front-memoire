export class UserDto {
    firstname!: string;
    lastname!: string;
    phone!: string;
    email!: string;
    password!: string;

 
    constructor() {}

    get _firstname(): string {
        return this.firstname
    }

    get _lastname(): string {
    return this.lastname
    }
    get _phone(): string {
    return this.phone
    }
    get _email(): string {
    return this.email
    }
    get _password(): string {
    return this.password
    }
    set _firstname(firstname: string) {
    this.firstname = firstname;
    }
    set _lastname(lastname: string) {
    this.lastname = lastname;
    }
    set _phone(phone: string) {
    this.phone = phone;
    }
    set _email(email: string) {
    this.email = email;
    }
    set _password(password: string) {
    this.password = password;
    }
}
