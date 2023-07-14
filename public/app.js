"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, "buy ").concat(this.details, " and pays  ").concat(this.amount);
    };
    return Invoice;
}());
var invONe = new Invoice('kevine', 'works on the single react page with kane', 500);
var invTwo = new Invoice('kellen', 'works on the single react page with ranedy', 200);
var Invoices = [];
Invoices.push(invONe);
Invoices.push(invTwo);
console.log(Invoices);
var form = document.querySelector('.new-item-form');
var field = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var Amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(field.value, toFrom.value, details.value, Amount.valueAsNumber);
});
