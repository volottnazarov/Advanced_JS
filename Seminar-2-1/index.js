class BankAccount {
    #balance = 0;

    constructor(balance) {
        if (balance < 0) throw new Error("Отрицательный баланс!");
        this.#balance = balance ;
    }
    get balance() {
        return this.#balance;
    }

    // set balance(balance){
    //     if (balance < 0) throw new Error("Отрицательная сумма!");
        
    //     this.#balance = balance;
    // }

    deposit(amount) {
        if (amount < 0) throw new Error("Отрицательная сумма!");
        return this.#balance += amount;
    };

    withdraw(amount) {
        if (amount < 0) throw new Error("Отрицательная сумма!");
        if(this.balance - amount < 0) throw new Error("Недостаточно средств на счете!");
        return this.#balance -= amount;
    }
}

let account = new BankAccount(500);
account.balance = 1000;  //set закоментировал, соотв-но нельзя изменить баланс из вне
console.log(account.balance);
account.deposit(200);
console.log(account.balance);
account.withdraw(280);
console.log(account.balance);
account.withdraw(500);
console.log(account.balance);