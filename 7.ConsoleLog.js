"use strict";

class Console {
	static history = [];
	constructor(style) {
		this._style = style;
	}

	log(...args) {
		let result;
		if (typeof args[0] === "string") {
			let argsStr = "";
			for (let i = 0; i < args.length; i++) {
				if (i === args.length - 1) {
					result = argsStr + args[i];
					Console.history.push(result);
					return result;
				}
				if (typeof args[i] === "string") {
					argsStr += args[i] + " ";
					continue;
				}
				argsStr += args[i] + ", ";
			}
			result = argsStr;
			Console.history.push(result);
			return result;
		}
		Console.history.push(JSON.stringify(args));
		return `${this._style}: ${JSON.stringify(args)}`;
	}
	history() {
		if (Console.history.length === 0) {
			return '""';
		}
		return Console.history.join("; ");
	}
	clearHistory() {
		Console.history = [];
	}
}
const myConsole = new Console("Regular");
console.log(myConsole.log("ok : ", 1, 2, 3)); // "Regular: [0,1,2,3]"
console.log(myConsole.log({ a: 1, b: 2 })); // "Regular: {a:1, b:2}"

console.log(myConsole.history());
myConsole.clearHistory();
console.log(myConsole.history());
