import {Invoice}from './classes/invoice.js'
import {Payment}from './classes/payment.js'
import {HasFormater}from './interfaces/HasFormater.js'

// let docOne : HasFormater 
// let docTwo:HasFormater
// docOne = new Invoice('Kevine','she is buying some goods',600)
// docTwo = new Payment('Kevine','she is buying some goods',600)

// let docs : HasFormater[]=[]
// docs.push(docOne) 
// docs.push(docTwo) 
// console.log(docs)


// const invONe = new Invoice('kevine','works on the single react page with kane', 500)
// const invTwo = new Invoice('kellen','works on the single react page with ranedy', 200)
// let Invoices: Invoice[]=[]
// Invoices.push(invONe)
// Invoices.push(invTwo)

// Invoices.forEach(inv=>{
//     console.log(inv.client, inv.amount,inv.format());
    
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement
const field = document.querySelector('#type') as HTMLSelectElement
const toFrom= document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const Amount = document.querySelector('#amount') as HTMLInputElement
form.addEventListener('submit',(e: Event ) =>{
    e.preventDefault();

    let docs : HasFormater
    if(field.value === 'invoice'){
        docs = new Invoice(toFrom.value, details.value, Amount.valueAsNumber)
    }else{
        docs = new Payment(toFrom.value, details.value, Amount.valueAsNumber)
    }

    
console.log(docs);

   
    console.log(
        field.value,
        toFrom.value,
        details.value,
        Amount.valueAsNumber 
        );
    
});