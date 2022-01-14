"use strict";

class CoffeeShop {
	constructor(name, menu, orders = []) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}
	addOrder(order) {
		if (this.menu[order]) {
			this.orders.push(order);
			return "Order added!";
		} else {
			return "This item is currently unavailable";
		}
	}
	fulfillOrder() {
		if (this.orders.length === 0) {
			return "All orders have been fulfilled";
		} else {
			let currentOrder = this.orders.shift();
			return `The ${currentOrder} is ready!`;
		}
	}
	listOrders() {
		if (this.orders.length === 0) {
			return [];
		} else {
			return this.orders;
		}
	}
	dueAmount() {
		let totalAmount = 0;
		let fooThis = this;
		this.orders.forEach(amountSum);
		function amountSum(item) {
			totalAmount += fooThis.menu[item].price;
		}
		return totalAmount;
	}
	cheapestItem() {
		let cheapestPrice = [];
		let cheapestItem = [];
		for (const [key, value] of Object.entries(this.menu)) {
			cheapestPrice.push(value.price);
			cheapestItem.push(key);
		}
		let cheap = Math.min(...cheapestPrice);
		let index = cheapestPrice.indexOf(cheap);
		return `The cheapest item is the ${cheapestItem[index]}`;
	}
	drinksOnly() {
		let drinks = [];
		for (const [key, value] of Object.entries(this.menu)) {
			if (value.type === "drink") {
				drinks.push(key);
			}
		}
		return drinks;
	}
	foodOnly() {
		let foods = [];
		for (const [key, value] of Object.entries(this.menu)) {
			if (value.type === "food") {
				foods.push(key);
			}
		}
		return foods;
	}
}
