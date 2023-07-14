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
    let values;
    values = [toFrom.value, details.value, Amount.valueAsNumber];
    let docs;
    if (field.value === 'invoice') {
        docs = new Invoice(...values);
    }
    else {
        docs = new Payment(...values);
    }
    list.render(docs, field.value, 'end');
});
// Generic and  adding enum 
var ResourseType;
(function (ResourseType) {
    ResourseType[ResourseType["BOOK"] = 0] = "BOOK";
    ResourseType[ResourseType["FLAT"] = 1] = "FLAT";
    ResourseType[ResourseType["ORANGE"] = 2] = "ORANGE";
    ResourseType[ResourseType["BREAD"] = 3] = "BREAD";
})(ResourseType || (ResourseType = {}));
const DocOne = {
    name: 'renaike',
    age: ResourseType.BOOK,
    data: { text: 'hero' }
};
const DocTwo = {
    name: 'Kellen',
    age: ResourseType.BREAD,
    data: ['kunda', 'tradesional']
};
console.log(DocOne, DocTwo);
