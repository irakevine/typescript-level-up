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