//функция добавления метаданных в обьект
function addMetaData(book, metaDataType, data){
    if(book[metaDataType]){
        book[metaDataType].push(data);
    }else{
        book[metaDataType] = [data];
    }
}

//функция извлечения метаданных из обьекта
function setMetaData(book, metaDataType){
    return book[metaDataType];
}

const book = {
    title: "1984",
    author: "George Orwell"
}

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetaData(book, reviewSymbol, "Отличная книга о дестопии");
addMetaData(book, ratingSymbol, 5);
addMetaData(book, tagsSymbol, "Дестопия");

console.log(book);
console.log(setMetaData(book, reviewSymbol));
console.log(setMetaData(book, ratingSymbol));
console.log(setMetaData(book, tagsSymbol));