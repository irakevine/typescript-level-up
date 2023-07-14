import {Invoice}from './classes/invoice.js'

const invONe = new Invoice('kevine','works on the single react page with kane', 500)
const invTwo = new Invoice('kellen','works on the single react page with ranedy', 200)
let Invoices: Invoice[]=[]
Invoices.push(invONe)
Invoices.push(invTwo)

Invoices.forEach(inv=>{
    console.log(inv.client, inv.amount,inv.format());
    
})

const form = document.querySelector('.new-item-form') as HTMLFormElement
const field = document.querySelector('#type') as HTMLSelectElement
const toFrom= document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const Amount = document.querySelector('#amount') as HTMLInputElement
form.addEventListener('submit',(e: Event ) =>{
    e.preventDefault();
    console.log(
        field.value,
        toFrom.value,
        details.value,
        Amount.valueAsNumber 
        );
    
});