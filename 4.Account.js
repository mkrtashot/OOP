"use strict";

class Account {
	static idnum1 = 0;
	static identifyAccounts(accountFirst, accountSecond) {
		if (accountFirst === accountSecond) {
			return true;
		}
		return false;
	}
	constructor(name, balance) {
		this.id = Account.idnum1++;
		this.name = name;
		this.balance = balance;
	}

	get get_set_id() {
		return this.id;
	}
	set get_set_id(newId) {
		this.id = newId;
	}
	get get_set_name() {
		return this.name;
	}
	set get_set_name(newName) {
		this.name = newName;
	}
	get get_set_balance() {
		return this.balance;
	}
	set get_set_balance(newBalance) {
		this.balance = newBalance;
	}

	credit(amount) {
		this.balance += amount;
		return `${amount} was added to ${this.name}'s balance. The balance is ${this.balance}.`;
	}
	debit(amount) {
		if (this.balance < amount) {
			return `Amount exceeded balance.`;
		}
		this.balance -= amount;
		return `${amount} was decreased from ${this.name}'s balance. The balance is ${this.balance}.`;
	}
	transferTo(anotherAccount, amount) {
		if (this.balance < amount) {
			return `Amount exceeded balance.`;
		}
		this.balance -= amount;
		anotherAccount.balance += amount;
		return `${amount} was taken from ${this.name}'s balance. It was added to ${anotherAccount.name}'s balance`;
	}
	toString() {
		return `${this.name}'s account ID is ${this.id}. The balance is ${this.balance}`;
	}
}

let user1 = new Account("Ashot", 1000);

console.log(user1.credit(1000));
console.log(user1.debit(500));

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
// _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
// 1000 }
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
// $1400.
