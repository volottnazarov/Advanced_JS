class Library {
    #books = [];

    constructor(books) {
        this.#books = books;
    };

    get allBooks() {
        if (!this.#books || !this.#books.length) {
            throw new Error("Библиотека пуста!");
        }
        return this.#books;
    };

    addBook(title) {
        try {
            if(!this.#books.length){
                this.#books.push(title);
            }else{
                let count = 0;
                this.#books.forEach(element => {
                    if(element == title){
                        count += 1;
                    }
                });
                if(count === 0){
                    this.#books.push(title);
                }
            }
        }catch (error) {
            console.error(`Библиотека не существует!`);
        }
    };

    removeBook(title) {
        let booksArr = this.#books;
        try {
            if(booksArr || booksArr.length){
                if(this.hasBook(title)){
                    const titleToDelete = title;
                    this.#books = booksArr.filter((number) => number !== titleToDelete);
                    console.log(`Книга <${title}> удалена.`);
                }else {
                    console.log(`Книга <${title}> отсутствует в библиотеке!`);
                }
            }
        } catch (error) {
            console.error("Библиотека не существует!");
        }
    };

    hasBook(title) {
        let booksArr = this.#books;
        try {
            if(booksArr || booksArr.length){
                const arr = this.#books;
                let count = 0;
                arr.forEach(element => {
                    if(element === title) {
                    count += 1;
                    }
                });
            return count > 0 ? true : false;

            }
        } catch (error) {
            console.error("Библиотека не существует!");
        }
    };

};

const bookData = new Library([]);
const bookData_2 = new Library();
bookData_2.addBook("Сборник");   // Библиотека не существует!
bookData.addBook("Рассказы");
bookData.addBook("Анекдоты");
bookData.addBook("Сборник");
console.log(bookData.allBooks);    // ['Сборник', 'Рассказы', 'Анекдоты']
// bookData.addBook("Рассказы");
bookData_2.removeBook("Рассказы"); // Библиотека не существует!
//console.log(bookData.allBooks);
//bookData.removeBook("Сборник");   // Книга <Сборник> удалена.
//bookData.removeBook("Анекдоты");
console.log(bookData.hasBook("Рассказы"));  // true
console.log(bookData.hasBook("Поэмы"));    // false

