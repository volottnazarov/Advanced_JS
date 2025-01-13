// const bodyEl = document.body;
// const array = Array.from(bodyEl.childNodes);

// const resultArray = array.filter(elem => elem.tagName === 'DIV' && elem.getAttribute('data-active'));
// console.log(resultArray);

//Второй вариант:

const divEl = Array.from(document.querySelectorAll('div'));
const resultDiv = divEl.filter(elem => elem.hasAttribute('data-active'));
//Также можно использовать объект dataset, который предоставляет доступ ко всем «data-» атрибутам элемента. Имена свойств этого объекта соответствуют именам «data-» атрибутов, но без префикса «data-«
const resultDiv2 = divEl.filter(elem => elem.dataset.active);
console.log(resultDiv);
console.log(resultDiv2);

