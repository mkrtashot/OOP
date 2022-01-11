"use strict";

class Shiritori {
	constructor(words = [], game_over = false, wordsObj = {}) {
		this.words = words;
		this.game_over = game_over;
		this.wordsObj = wordsObj;
	}
	play(word) {
		if (!this.game_over) {
			if (this.words.length === 0) {
				this.words.push(word);
				this.wordsObj[word] = word;
				return "Good start of a game";
			}

			if (this.wordsObj[word] === undefined) {
				let initial = this.words[this.words.length - 1].split("");
				let lastInitial = initial[initial.length - 1];
				initial = word.split("");
				let firstInitial = initial[0];

				if (lastInitial !== firstInitial) {
					this.game_over = true;
					return `Game over`;
				}

				this.words.push(word);
				this.wordsObj[word] = word;
				return this.words;
			} else {
				this.game_over = true;
				return `${word} already was used. The game is over`;
			}
		} else {
			return "The game is over. Please restart to begin again";
		}
	}
	restart() {
		this.words = [];
		this.game_over = false;
		return "Let's begin from the beginning!";
	}
}

let myShiritori = new Shiritori();

console.log(myShiritori.play("apple"));
console.log(myShiritori.play("ear"));
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("offa"));
console.log(myShiritori.play("apple"));
console.log(myShiritori.play("corn"));
console.log(myShiritori.words);
console.log(myShiritori.restart());
console.log(myShiritori.words);
