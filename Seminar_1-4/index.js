let lessons = new Map();
let students = new Map();

lessons.set("математика", "Смирнов");
lessons.set("исория", "Иванова");

const ivanLessons = new Set().add("математика").add("история");

students.set("Иван", ivanLessons);

console.log(`Преподаватель по математике:  ${lessons.get("математика")}`);
console.log(`Уроки Ивана: ${[...students.get('Иван')]}`);