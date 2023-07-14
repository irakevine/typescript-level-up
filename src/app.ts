import {Invoice}from './classes/invoice.js'
import { listTemplate } from './classes/listTemplate.js'
import {Payment}from './classes/payment.js'
import {HasFormater}from './interfaces/HasFormater.js'

//list template instance
const ul = document.querySelector('ul')!
const list = new listTemplate(ul)

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

    list.render(docs, field.value,'end')
});