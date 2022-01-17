# Tasks

## TASK 1 - CoffeeShop

### Properties:

- name: a string (basically, of the shop)
- menu: an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
- orders: an empty array

### Methods:

- addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
  Otherwise, return "This item is currently unavailable!"
- fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
  empty, return "All orders have been fulfilled!"
- listOrders: returns the list of orders taken, otherwise, an empty array.
- dueAmount: returns the total amount due for the orders taken.
- cheapestItem: returns the name of the cheapest item on the menu.
- drinksOnly: returns only the item names of type drink from the menu.
- foodOnly: returns only the item names of type food from the menu.

IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

### Examples:

```Javascript
name
tcs.addOrder("hot cocoa"); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll"); // "Order added!"
tcs.addOrder("iced coffee"); // "Order added!"
tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
tcs.dueAmount(); // 2.17
tcs.fulfillOrder(); // "The cinnamon roll is ready!"
tcs.fulfillOrder(); // "The iced coffee is ready!"
tcs.fulfillOrder(); // "All orders have been fulfilled!"
// all orders have been presumably served
tcs.listOrders(); // []
// an empty array is returned if all orders have been exhausted
tcs.dueAmount(); // 0.0
// no new orders taken, expect a zero payable
tcs.cheapestItem(); // "lemonade"
tcs.drinksOnly(); // ["orange juice", "lemonade", "cranberry juice",
"pineapple juice", "lemon iced tea", "vanilla chai latte", "hot
chocolate", "iced coffee"]
tcs.foodOnly(); // ["tuna sandwich", "ham and cheese sandwich", "bacon and
egg", "steak", "hamburger", "cinnamon roll"]
```

Here is the [solution](1.CoffeeShop.js)

---

## TASK 2 - Shiritori

This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:

- First character of next word must match last character of previous word.
- The word must not have already been said.

Below is an example of a Shiritori game:

```Javascript
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
["motive", "beach"]; // invalid! - beach should start with "e"
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
```

Write a Shiritori class that has two instance properties:

- words: an array of words already said.
- game_over: a boolean that is true if the game is over.

### Methods:

- play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).

* If it is valid, it adds the word to the words array, and returns the words array.
* If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.

- restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".

### Examples:

```Javascript
myShiritori = new Shiritory();
myShiritori.play("apple"); // ["apple"]
myShiritori.play("ear"); // ["apple", "ear"]
myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
myShiritori.play("corn"); // "game over"
// Corn does not start with an "o".
myShiritori.words; // ["apple", "ear", "rhino"]
// Words should be accessible.
myShiritori.restart(); // "game restarted"
myShiritori.words; // []
// Words array should be set back to empty.
myShiritori.play("hostess"); // ["hostess"]
myShiritori.play("stash"); // ["hostess", "stash"]
myShiritori.play("hostess"); // "game over"
```

IMPORTANT Words cannot have already been said.

The play method should not add an invalid word to the words array.
You don't need to worry about capitalization or white spaces for the inputs for the play method. There will only be single inputs for the play method.

Here is the [solution](2.Shiritori.js)

---

## TASK 3 - Author-Book

Create an Author class and a Book

Author should have:

fields

- class
- name
- email
- gender
- for fields methods getters
- toString()

Book should have:

fields

- title
- author(Author)
- price
- quantity

methods

- for fields getters and setters
- getProfit() - which calculates the profit from the book based on the
- price and quantity.
- toString()

### Example

```Javascript
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

Here is the [solution](3.AuthorBook.js)

---

## TASK 4 - Account

Create an Account class.
Account should have:

fields

- id
- name
- balance

for fields

- getters, setters - for name and balance
- credit(amount) - which should add amount to balance and return the updated balance.
- debit(amount) - which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
- transferTo(anotherAccount, amount) - which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
- static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts and identifies if they are the same or not comparing all fields.
- toString()

### Example

```javascript
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
$1400.
```

Here is the [solution](4.Account.js)

---

## Task 5 - Person - Student

Write classes:
Person class and Student class.
Person should have:

fields

- firstName
- lastName
- gender
- age

methods

- for fields setters
- for fields getters
- toString()

```javascript
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```

Student is inherited from Person.
It should have fields

- year
- fee
- program(array of { programName, grade })

#### methods

- for fields setters
- for fields getters
- passExam(programName, grade)
- isAllPassed()
- toString()

Program should contain the data about its programs and exams.
passExam will update that data, so if student passed all the exams(grade
to 50 is great or equal) , its year should be increased by one.

It should have a method isAllPassed().

Example of program array:

```javascript
[
	{ programName: "math", grade: 10 },
	{ programName: "english", grade: undefined },
];
```

Here is the [solution](5.PersonStudent.js)

---

## Task 6 - Library - Book

Describe a model of a library. For that define classes:

- Library
- Reader
- Book.

To create correct hierarchies and connections, you should have a subclasses of Book such as

- LibraryBookBase,
- LibraryBook,
- ReaderBook.

### Book should have

fields

- title string
- author string

methods

- getters for fields
- toString() - which returns true if the book title and author is the same with the current instance, false, otherwise.

### LibraryBookBase should have

fields

- title - string
- author - string
- bookId - number

methods

- getters for fields
- isTheSameBook(book)
- toString()

### LibraryBook fields should have

- string
- author - string
- bookId - number
- quantity - number

methods

- getters for fields
- setters for appropriate fields
- title
- toString()
- increaseQuantityBy(amount - number)- increases the quantity of the book by the given amount.
- decreaseQuantityBy(amount - number)- decrease the quantity of the book by the given amount.

### ReaderBook should have

fields

- title - string
- author - string
- bookId - number
- string
- isReturned - boolean

methods should have fields

- getters for fields
- setters for appropriate fields
- expirationDate
- toString()

### Reader

- firstName
- string
- readerId - number
- books - Array of ReaderBook

methods

- getters for fields
- setters for appropriate fields
- lastName
- toString()
- requests a book from the library -If returned book is not a null and is a type of ReaderBook, pushes it to the books.

### Library should have

- fields
- books - Array of LibraryBook
- readers - Array of Readers

methods

- getters for fields
- doHaveBook(requestedBook - Book) - returns true if library has the book, false otherwise.
- addBook(newBook - Book) - add new book to the library. If the book already exists, increases its quantity, otherwise adds new book of type LibraryBook.
- addBooks(newBooks) - add new books to the library with the same logic as the addBook. Returns changed array of the books.
- checkReaderId(readerId) - returns true if there exist a reader with the given id, otherwise returns false.
- lendBook(book - Book, readeId) - checks whether the book exists and there is at least one at the library. Checks whether library has a reader with the given id. If the both are true, returns a book of type ReaderBook.

Here is the [solution](6.LibraryBook.js)

---

## Task 7 - CustomConsole Class

Create a CustomConsole class with following methods:

- log function that takes user arguments and returns them as a string,
- history function that takes an optional range as an argument,
- clearHistory function to remove the history memory.

The log function has no limit of arguments.

```javascript
const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
myConsole.log([0, 1, 2, 3]); // "Regular: [0,1,2,3]"
fancyConsole.log({ a: 1, b: 2 }); // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3); // "ok : 1, 2, 3"
myConsole.clearHistory(); // true
myConsole.history(); // ""
```

Here is the [solution](7.ConsoleLog.js)
