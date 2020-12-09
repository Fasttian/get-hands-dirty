class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student( "寄奴", "刘", "User" );

document.body.innerHTML = greeter(user);