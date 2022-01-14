"use strict";

class Author {
	constructor(name, email, gender) {
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	get get_name() {
		return this.name;
	}
	get get_email() {
		return this.email;
	}
	get get_gender() {
		return this.gender;
	}

	toString() {
		return `The Author's name is ${this.name}, email address is${this.email}`;
	}
}

class Book {
	constructor(title, author, price, quantity) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity;
	}

	get get_set_title() {
		return this.title;
	}
	set get_set_title(newTitle) {
		this.title = newTitle;
	}
	get get_set_author() {
		return this.author;
	}
	set get_set_author(newAuthor) {
		this.author = newAuthor;
	}
	get get_set_price() {
		return this.price;
	}
	set get_set_price(newPrice) {
		this.price = newPrice;
	}
	get get_set_quantity() {
		return this.quantity;
	}
	set get_set_quantity(newQuantity) {
		this.quantity = newQuantity;
	}

	getProfit() {
		return `Profit from ${this.title} is ${this.price * this.quantity} dram`;
	}

	toString() {
		return `${this.title} book was written by ${this.author.name}`;
	}
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "femaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

let book1 = new Book("HP", author1, 1300, 1000000);

console.log(book1.getProfit());
console.log(book1.toString());
