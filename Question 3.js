// Question 3: Write a “person” class to hold all the details.

class Person {
    // Properties
    private firstName: string;
    private lastName: string;
    private age: number;
    private email: string;
    private address: string;

    // Constructor
    constructor(firstName: string, lastName: string, age: number, email: string, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    // Methods
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge(): number {
        return this.age;
    }

    getEmail(): string {
        return this.email;
    }

    getAddress(): string {
        return this.address;
    }

    // Setters (optional, depending on requirements)
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setAddress(address: string): void {
        this.address = address;
    }
}

// With this class, you can create instances of a person and manage their details easily.
// For example:

const person1 = new Person("John", "Doe", 30, "john.doe@example.com", "123 Main Street");
console.log(person1.getFullName()); // Output: John Doe
console.log(person1.getAge());      // Output: 30
console.log(person1.getEmail());    // Output: john.doe@example.com
console.log(person1.getAddress());  // Output: 123 Main Street

// Updating person1's email
person1.setEmail("john.doe@gmail.com");
console.log(person1.getEmail());    // Output: john.doe@gmail.com