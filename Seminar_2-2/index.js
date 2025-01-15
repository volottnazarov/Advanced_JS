class User {
    #name;
    #surname;

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }
    get name() {
        return this.#name;
    }
    get surname() {
        return this.#surname;
    }

}

class PremiumUser extends User {
    premiumAccount = new Date().setUTCFullYear(new Date().getFullYear() + 1);
    //срок действия премиум аккаунта устанавливаем на год вперед от текущего
    constructor(name, surname){
        super(name, surname);
    }
}

class RegularUser extends User {
    constructor(name, surname){
        super(name, surname);
    }
}

let regularUser1 = new RegularUser("Vladimir", "Nazarov");
let premiumUser1 = new PremiumUser("Irina", "Nazarova",);

console.log(regularUser1.name, regularUser1.surname);
console.log(premiumUser1.name, premiumUser1.surname);

function getAccountInfo(user) {
    if(user instanceof PremiumUser){  //для проверки типа переданного польз-ля
        return console.log(`${user.name} ${user.surname} - является премиум аккаунтом,
            срок действия до: ${new Date(user?.premiumAccount).getFullYear()}г.`);
            //user?.premiumAccount - проходим по user у которых есть свойство premiumAccount и
            // методом getFullYear() получаем до какого года действителен.
    }else {
        return console.log(`${user.name} ${user.surname} - является обычным аккаунтом`);
    }
}
getAccountInfo(premiumUser1);
getAccountInfo(regularUser1);