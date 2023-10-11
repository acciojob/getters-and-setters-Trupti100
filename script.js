// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    if (age >= 0) {
      this._age = age;
    } else {
      console.error("Age cannot be negative.");
    }
  }
}

// Student class that extends Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

// Teacher class that extends Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Example usage:
const person = new Person("John", 30);
console.log(person.name); // Output: John
person.age = 35; // Set the age
console.log(person.age); // Output: 35

const student = new Student("Alice", 20);
student.study(); // Output: Alice is studying.

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach(); // Output: Mr. Smith is teaching.
