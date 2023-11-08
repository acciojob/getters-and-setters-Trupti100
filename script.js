class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 30);
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 40);

console.log(person.name); // Output: John
person.age = 35; // Setter example

student.study(); // Output: Alice is studying
teacher.teach(); // Output: Mr. Smith is teaching
