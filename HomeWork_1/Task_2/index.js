const cookSpec = new Map(); //Специализация повара
const dishCook = new Map(); //Блюда - повара
const order = new Map();

cookSpec.set("Виктор", "пицца")
        .set("Ольга", "суши")
        .set("Дмитрий", "дессерты");

dishCook.set("Пицца 'Маргарита'", "Виктор")
        .set("Пицца 'Пепперони'", "Виктор")
        .set("Суши 'Филадельфия'", "Ольга")
        .set("Суши 'Калифорния'", "Ольга")
        .set("Тирамису", "Дмитрий")
        .set("Чизкейк", "Дмитрий");

let client_1 = {name: "Алексей"};
let client_2 = {name: "Мария"};
let client_3 = {name: "Ирина"};

let order_1 = new Set();
let order_2 = new Set();
let order_3 = new Set();

order_1.add("Пицца 'Маргарита")
        .add("Чизкейк");

order_2.add("Суши 'Филадельфия'")
        .add("Тирамису");

order_3.add("Пицца 'Пепперони'")
        .add("Чизкейк");

order.set(client_1, order_1)
        .set(client_2, order_2)
        .set(client_3, order_3);

console.log(`Клиент ${client_1.name} заказал(а): ${[...order.get(client_1)]}`);
console.log(`Клиент ${client_2.name} заказал(а): ${[...order.get(client_2)]}`);
console.log(`Клиент ${client_3.name} заказал(а): ${[...order.get(client_3)]}`);