"use strict";

class Person {
	constructor({ firstName, lastName, gender, age } = {}) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}

	get _firstName() {
		return this.firstName;
	}
	set _firstName(newFirstName) {
		this.firstName = newFirstName;
	}
	get _lastName() {
		return this.lastName;
	}
	set _lastName(newLastName) {
		this.lastName = newLastName;
	}
	get _gender() {
		return this.gender;
	}
	set _gender(newGender) {
		this.gender = newGender;
	}
	get _age() {
		return this.age;
	}
	set _age(newAge) {
		this.age = newAge;
	}

	PersonToString() {
		return `${this.firstName} ${this.lastName}, ${this.age} years old`;
	}
}

class Student extends Person {
	constructor({ persInfo, year, fee, program } = {}) {
		super(persInfo);
		this.year = year;
		this.fee = fee;
		this.program = program;
	}

	get _year() {
		return this.year;
	}
	set _year(newYear) {
		this.year = newYear;
	}
	get _fee() {
		return this.fee;
	}
	set _fee(newFee) {
		this.fee = newFee;
	}
	get _program() {
		return this.program;
	}
	set _program(newProgram) {
		this.program = newProgram;
	}

	passExam(programName, grade) {
		let flag = true;
		for (let i = 0; i < this.program.length; i++) {
			if (this.program[i].programName === programName) {
				this.program[i].grade = grade;
				flag = false;
				return `${this.firstName} has got ${grade} from ${programName}`;
			}
		}
		if (flag) {
			return `${this.firstName} has not taken this program.`;
		}
	}
	isAllPassed() {
		if (this.program.every((item) => item.grade >= 50)) {
			this.year++;
			this.program = [];
			return `${this.firstName} has passed this year`;
		}

		let notPassedNames = [];
		this.program.forEach(finder);
		function finder(item) {
			if (!(item.grade >= 50)) {
				notPassedNames.push(item.programName);
			}
		}

		return `${this.firstName} still has to pass these programmes: ${notPassedNames}`;
	}
	StudentToString() {
		return `${this.firstName} ${this.lastName} is in the ${this.year} year`;
	}
}

const person1 = {
	firstName: "Lana",
	lastName: "Hambardzumyan",
	gender: "female",
	age: 29,
};

const firstStudent = {
	persInfo: person1,
	year: 1,
	fee: 1250000,
	program: [
		{ programName: "math", grade: 10 },
		{ programName: "english", grade: undefined },
	],
};

const user1 = new Person(person1);
const student1 = new Student(firstStudent);

console.log(student1._program);
console.log(student1.passExam("math", 60));
console.log(student1._program);
console.log(student1.isAllPassed());
console.log(student1.passExam("russian", 60));
console.log(student1._program);
// console.log(student1.passExam("english", 60));
// console.log(student1.isAllPassed());
