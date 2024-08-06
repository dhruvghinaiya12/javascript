class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;
    #rentedCopies;
  
    constructor(title, author, price, rentalPrice, copiesAvailable) {
      this.title = title;
      this.#author = author;
      this.#price = price;
      this.#rentalPrice = rentalPrice;
      this.#copiesAvailable = copiesAvailable;
      this.#rentedCopies = 0;
    }
  
    getAuthor() {
      return this.#author;
    }
  
    getPrice() {
      return this.#price;
    }
  
    getRentalPrice() {
      return this.#rentalPrice;
    }
  
    getCopiesAvailable() {
      return this.#copiesAvailable;
    }
  
    getRentedCopies() {
      return this.#rentedCopies;
    }
  
    setAuthor(author) {
      this.#author = author;
    }
  
    setPrice(price) {
      this.#price = price;
    }
  
    setRentalPrice(rentalPrice) {
      this.#rentalPrice = rentalPrice;
    }
  
    setCopiesAvailable(copiesAvailable) {
      this.#copiesAvailable = copiesAvailable;
    }
  
    setRentedCopies(rentedCopies) {
      this.#rentedCopies = rentedCopies;
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
        this.#rentedCopies += book;
        return `You have rented ${book} copies. Remaining copies: ${this.#copiesAvailable}`;
      } else {
        return "Sorry, you don't have enough copies.";
      }
    }
  
    returnBook(book) {
      if (this.#rentedCopies >= book) {
        this.#rentedCopies -= book;
        this.#copiesAvailable += book;
        return `You have returned ${book} rented copies. Available copies: ${this.#copiesAvailable}`;
      } else {
        return "Sorry, you are trying to return more copies than rented.";
      }
    }
  
    checkAvailability() {
      return this.#copiesAvailable;
    }
  
    displayBookInfo() {
      return `Title: ${this.title}, Author: ${this.#author}, Price: $${this.#price}, Rental Price: $${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}, Rented Copies: ${this.#rentedCopies}`;
    }
  }
  
  let book1 = new Book("nineteen steps", "millie", 500, 100, 19);
  
  console.log(book1.buyBook(10));
  console.log(book1.rentBook(5));
  console.log(book1.returnBook(5));
  console.log(book1.checkAvailability());
  console.log(book1.displayBookInfo());
  
  book1.setAuthor("abc");
  book1.setPrice(400);
  book1.setRentalPrice(150);
  book1.setCopiesAvailable(20);
  book1.setRentedCopies(3);
  
  console.log(book1.displayBookInfo());
  