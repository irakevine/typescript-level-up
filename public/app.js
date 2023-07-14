import { Invoice } from './classes/invoice.js';
import { listTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
//list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
const form = document.querySelector('.new-item-form');
const field = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (field.value === 'invoice') {
        docs = new Invoice(toFrom.value, details.value, Amount.valueAsNumber);
    }
    else {
        docs = new Payment(toFrom.value, details.value, Amount.valueAsNumber);
    }
    list.render(docs, field.value, 'end');
});
const DocOne = {
    name: 'renaike',
    age: 69,
    data: { text: 'hero' }
};
const DocTwo = {
    name: 'Kellen',
    age: 65,
    data: ['kunda', 'tradesional']
};
console.log(DocOne, DocTwo);
