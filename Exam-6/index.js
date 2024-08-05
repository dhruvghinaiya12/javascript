class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;

    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }

    buyBook(book) {
        if (this.#copiesAvailable >= book) {
            this.#copiesAvailable -= book;
            return `You have bought ${book} copies. Remaining copies: ${this.#copiesAvailable}`;
        } else {
            return "Sorry, you don't have enough copies.";
        }
    }

    rentBook(book) {
        if (this.#copiesAvailable >= book) {
            this.#copiesAvailable -= book;
            return `You have rented ${book} copies. Remaining copies: ${this.#copiesAvailable}`;
        } else {
            return "Sorry, you don't have enough copies.";
        }
    }

    returnBook(book) {
        this.#copiesAvailable += book;
        return `You have returned ${book} copies. Available copies: ${this.#copiesAvailable}`;
    }

    checkAvailability() {
        return this.#copiesAvailable;
    }

    displayBookInfo() {
        return `Title: ${this.title}, Author: ${this.#author}, Price: $${this.#price}, Rental Price: $${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
    }
}

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 19, 12, 19);

console.log(book1.buyBook(10));
console.log(book1.rentBook(5));
console.log(book1.returnBook(5));
console.log(book1.checkAvailability());
console.log(book1.displayBookInfo());
