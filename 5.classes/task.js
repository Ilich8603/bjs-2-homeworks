class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    /*if (!(this instanceof PrintEditionItem)) {
      return new PrintEditionItem(name, releaseDate, pagesCount);
    } */
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // внутреннее хранилище для геттера/сеттера
    this.type = null;
  }

  // Геттер для state
  get state() {
    return this._state;
  }

  // Сеттер для state с контролем диапазона
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  // Метод "подклейки" – увеличивает состояние в 1.5 раза
  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    // Добавляем книгу только если её состояние > 30
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    // Поиск книги по любому свойству (type – ключ, value – искомое значение)
    const found = this.books.find((book) => book[type] === value);
    return found || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      // Удаляем книгу из массива и возвращаем её
      const [removedBook] = this.books.splice(index, 1);
      return removedBook;
    }
    return null;
  }
}