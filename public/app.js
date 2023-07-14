import { Invoice } from './classes/invoice.js';
const invONe = new Invoice('kevine', 'works on the single react page with kane', 500);
const invTwo = new Invoice('kellen', 'works on the single react page with ranedy', 200);
let Invoices = [];
Invoices.push(invONe);
Invoices.push(invTwo);
Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const field = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(field.value, toFrom.value, details.value, Amount.valueAsNumber);
});
