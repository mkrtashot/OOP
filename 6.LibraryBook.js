"use strict";

class Library {
	constructor(books = [], readers = []) {
		this._books = books;
		this._readers = readers;
	}

	get books() {
		return this._books;
	}
	get readers() {
		return this._readers;
	}

	doHaveBook(requestedBook) {
		for (let i = 0; i < this._books.length; i++) {
			for (const [key, value] of Object.entries(this._books[i])) {
				if (value === requestedBook.title) {
					return `Yes, the library has ${requestedBook.title} book.`;
				}
			}
		}
		return `No, the library doesn't have ${requestedBook.title} book.`;
	}
	addBook(bookNew) {
		for (let i = 0; i < this._books.length; i++) {
			for (const [key, value] of Object.entries(this._books[i])) {
				if (value === bookNew.title) {
					this._books[i].quantity++;
					return `${bookNew.title} was already added to Library. It's quantity is ${this._books[i].quantity}`;
				}
			}
		}
		const newBookForAdd = {
			title: bookNew.title,
			author: bookNew.author,
			bookId: bookNew.bookId,
			quantity: 1,
		};
		this.books.push(newBookForAdd);
		return `Okay, ${newBookForAdd.title} was added to Library`;
	}
	addBooks(booksNew) {
		let addedBooksTitles = [];
		let updatedBooksTitles = [];
		console.log(this._books);
		for (let j = 0; j < booksNew.length; j++) {
			let flag = true;
			for (let i = 0; i < this._books.length; i++) {
				if (this._books[i].title === booksNew[j].title) {
					this._books[i].quantity++;
					updatedBooksTitles.push(booksNew[j].title);
					flag = false;
				}
			}

			if (flag) {
				const newBookForAdd = {
					title: booksNew[j].title,
					author: booksNew[j].author,
					bookId: booksNew[j].bookId,
					quantity: 1,
				};
				addedBooksTitles.push(newBookForAdd.title);
				this._books.push(newBookForAdd);
			}
		}
		let added;
		let updated;
		if (addedBooksTitles.length === 0) {
			added = "No new books added";
		} else {
			added = addedBooksTitles.join(",");
		}
		if (updatedBooksTitles.length === 0) {
			updated = "No books were updated";
		} else {
			updated = updatedBooksTitles.join(",");
		}
		return (
			`Here is the list of added books: ${added}` +
			"\n" +
			`Here is the list of updated books: ${updated}`
		);
	}

	checkReaderId(readId) {
		for (let i = 0; i < this.readers.length; i++) {
			if (this.readers[i].readerId === readId) {
				return `User name is ${this.readers[i].firstName}`;
			}
		}

		return `No user found with that ID`;
	}
	lendBook(book, readerId) {
		for (let i = 0; i < this._books.length; i++) {
			for (let j = 0; j < this._readers.length; j++) {
				if (
					this._books[i].title === book.title &&
					this._readers[j].readerId === readerId &&
					this._books[i].quantity > 0
				) {
					ReaderBook._quantity--;
					ReaderBook._isReturned = false;
					return `${this._readers[j].firstName} has lended ${this._books[i].title} book`;
				}
			}
		}
	}
}

class Reader {
	constructor({ firstName, lastName, readerId, books } = {}) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._readerId = readerId;
		this._books = books;
	}

	get firstName() {
		return this._firstName;
	}
	get lastName() {
		return this._lastName;
	}
	get readerId() {
		return this._readerId;
	}
	get books() {
		return this._books;
	}
	set books(newBook) {
		this._books.push(newBook);
		return `Okay, ${newBook._title} was added to ${this._firstName}'s read book list`;
	}

	toString() {
		if (this._books.length === 0) {
			return `${this._firstName} has not read any books`;
		}
		let readBooks = [];
		for (let i = 0; i < this._books.length; i++) {
			readBooks.push(this._books[i].title);
		}
		return `${
			this._firstName
		} has read so far this/these book/books: ${readBooks.join(",")}`;
	}

	borrowBook(book, library, readerBook) {
		if (readerBook._isReturned === true) {
			for (let i = 0; i < library.books.length; i++) {
				if (book.title === library.books[i].title) {
					this._books.push(book);
					readerBook._isReturned = false;
					library.readers.push(this);
					return `Okay, ${this._firstName} has borrowed ${book.title} book.`;
				}
			}
		}
		return "Something went wrong";
	}
}

class Book {
	constructor({ title, author } = {}) {
		this._title = title;
		this._author = author;
	}

	get title() {
		return this._title;
	}
	get author() {
		return this._author;
	}

	toString() {
		return `${this._title} book was written by ${this._author}`;
	}
	isTheSameBook(book) {
		if (book._title === this._title && book._author === this._author) {
			return true;
		}
		return false;
	}
}

class LibraryBookBase extends Book {
	constructor({ inheritence, bookId } = {}) {
		super(inheritence);
		this._bookId = bookId;
	}

	get bookId() {
		return this._bookId;
	}

	toString() {
		return `${this._title} book was written by ${this._author}. Book's ID is ${this._bookId}`;
	}
}

class LibraryBook extends LibraryBookBase {
	constructor({ inheritence2, quantity } = {}) {
		super(inheritence2);
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}
	set quantity(quantityNew) {
		this._quantity = quantityNew;
	}

	toString() {
		return `${this._title} book was written by ${this._author}. Book's ID is ${this._bookId}. The quantity is ${this._quantity}`;
	}

	increaseQuantityBy(amount) {
		this._quantity += amount;
		return `${this._title}'s quantity was increased ${amount} times`;
	}
	decreaseQuantityBy(amount) {
		this._quantity -= amount;
		return `${this._title}'s quantity was decreased ${amount} times`;
	}
}
class ReaderBook extends LibraryBook {
	constructor({ inheritence3, expirationDate, isReturned } = {}) {
		super(inheritence3);
		this._expirationDate = expirationDate;
		this._isReturned = isReturned;
	}

	get expirationDate() {
		return this._expirationDate;
	}
	get isReturnedMethod() {
		if (this._isReturned) {
			return `${this._title} book was returned`;
		}
		return `${this._title} book was marked as not returned`;
	}
	set isReturnedMethod(trueOrFalse) {
		if (trueOrFalse) {
			this._isReturned = true;
		} else {
			this._isReturned = false;
		}
	}

	toString() {
		let returnStatusCheck = "";
		if (this._isReturned) {
			returnStatusCheck = "was returned";
		} else {
			returnStatusCheck = "was not returned";
		}
		return `${this._title} book was written by ${this._author}. Book's ID is ${this._bookId}. This book ${returnStatusCheck}`;
	}
}

const book1 = {
	title: "Harry Potter",
	author: "J. K. Rowling",
	quantity: 1,
};

const book2 = {
	title: "You don't know JS",
	author: "Kyle Slipmson",
	quantity: 1,
};

let libBook1 = new Book(book1);

console.log(libBook1);

let addingBook = {
	inheritence: book1,
	bookId: "111",
};

const libAddingBook1 = new LibraryBookBase(addingBook);
console.log(libAddingBook1.toString());

const libBookDestr = {
	inheritence2: addingBook,
	quantity: 1,
};

const libBook2 = new LibraryBook(libBookDestr);

console.log(libBook2.toString());
console.log(libBook2.increaseQuantityBy(3));
console.log(libBook2.toString());

const readableBook = {
	inheritence3: libBookDestr,
	expirationDate: "13.12.2022",
	isReturned: true,
};

const readableBookDestr = new ReaderBook(readableBook);

const reader1 = {
	firstName: "Ashot",
	lastName: "Mkrtchayn",
	readerId: 13,
	books: [readableBookDestr],
};

const user1 = new Reader(reader1);

console.log(user1);
console.log(user1.firstName);
console.log(user1.books);
console.log(user1.toString());
console.log(user1.readerId);
console.log(readableBookDestr.toString());
console.log((readableBookDestr.isReturnedMethod = true));
console.log(readableBookDestr.isReturnedMethod);

let myLibrary = new Library([book1], [reader1]);

console.log(myLibrary.books);

console.log(myLibrary.doHaveBook(book2));
console.log(myLibrary.addBook(book1));
console.log(myLibrary.addBooks([book1, book2]));
console.log(myLibrary.addBook(book2));
console.log(myLibrary.checkReaderId(13));
console.log(myLibrary.readers);
console.log(myLibrary.lendBook(libBook1, 13));
