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
   let values :[string, string,number]
       values =[toFrom.value, details.value, Amount.valueAsNumber]
    let docs : HasFormater
    if(field.value === 'invoice'){
        docs = new Invoice(...values)
    }else{
        docs = new Payment(...values)
    }

    list.render(docs, field.value,'end')
});
// Generic and  adding enum 
enum ResourseType { BOOK, FLAT, ORANGE, BREAD }
interface  Resourse<T>{
    name:string;
    age: ResourseType;
    data: T
}
const DocOne : Resourse <object>={
    name:'renaike',
    age: ResourseType.BOOK,
    data:{text:'hero'}

}
const DocTwo : Resourse <string[]> ={
    name:'Kellen',
    age:ResourseType.BREAD,
    data: ['kunda','tradesional']
}
console.log(DocOne,DocTwo);
