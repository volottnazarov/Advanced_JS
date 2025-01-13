const books = [
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "1984", author: "George Orwell" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
    ];

books[Symbol.iterator] = function() {     //добавляем свойство Symbol.iterator
    return {
        current: 0,
        last: this.length,
        next() {
            return this.current < this.last ? {
                done: false, value: books[this.current ++] } : {
                    done: true};
            },
        }
}

for (let element of books) {
    console.log(`Название: ${element.title}, автор: ${element.author}`);
}


//Доп. примеры:

const people = ["Tom", "Bob", "Sam"];
const iter = people[Symbol.iterator]();
const result = iter.next();
console.log(result);    // {value: "Tom", done: false}
//false указывает, что в массиве еще есть элементы для перебора.
