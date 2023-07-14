export class Payment {
    constructor(receipent, details, amount) {
        this.receipent = receipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.receipent} is brought ${this.details} and pays  ${this.amount}`;
    }
}
