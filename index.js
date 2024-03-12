class Person {
    constructor(lastName, firstName, age, department, salary) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.department = department;
        this.salary = salary

    }
    updateName(lastName) {
        this.lastName = lastName;
    }

    updateAge() {
        this.age = this.age + 1
    }
}

const Person1 = new Person('Wirtz', 'Roman', 54, 'Geschäftsleitung', '5.500,00 EUR')
const Person2 = new Person('Wirtz', 'Susanne', 30, 'Design', '4.500,00 EUR')
const Person3 = new Person('Wirtz', 'Kathi', 25, 'Verkauf', '3.500,00 EUR')
const Person4 = new Person('Wirtz', 'Roman', 54, 'Geschäftsleitung', '5.500,00 EUR')
const Person5 = new Person('Wirtz', 'Roman', 54, 'Geschäftsleitung', '5.500,00 EUR')

// console.log(Person1);
// console.log(Person2);
// console.log(Person3);
// Person3.updateName('Paap');
// console.log(Person3);
// Person3.updateAge();
// console.log(Person3);
// Person1.updateAge()
// console.log(Person1);

////////////////////////////////////////////////////////////

class User {
    constructor(surname, name, age, gender) {
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    rename(newName) {
        this.name = newName
    }
}


class Admin extends User {
    constructor(surname, name, age, gender, role, id) {
        super(surname, name, age, gender)
        this.role = role
        this.id = id
    }
}

class Client extends User {
    constructor(surname, name, age, gender, sale) {
        super(surname, name, age, gender, sale)
        this.sale = sale
    }
}

let Admin1 = new Admin('Falmann', 'Albert', 45, 'male', 'admin', 1)
console.log(Admin1);
let Client1 = new Client('Chukwuemeka', 'Samuel', 40, 'male', '20%')
// console.log(Client1);
Admin1.rename('Martin')
console.log(Admin1);
Client1.rename('Johnson')
console.log(Client1);
