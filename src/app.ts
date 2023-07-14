class Invoice {
    client : string;
    details:string;
    amount: number
constructor(c:string,d:string, a:number){
    this.client =c
    this.details= d
    this.amount= a
}
format(){
    return `${this.client}buy ${this.details} and pays  ${this.amount}`
}

}
const invONe = new Invoice('kevine','works on the single react page with kane', 500)
const invTwo = new Invoice('kellen','works on the single react page with ranedy', 200)
let Invoices: Invoice[]=[]
Invoices.push(invONe)
Invoices.push(invTwo)

console.log(Invoices);


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