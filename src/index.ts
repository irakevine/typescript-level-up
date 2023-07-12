function CalculaterTax(income:number , TaxtYear: number):number{
    
    if(TaxtYear < 2022  )
    return income*1.2;
    return income*1.3;
}
CalculaterTax(10_000, 2022)


// //OBJECTS
type employee ={
    readonly id:number,
     name:string,
     retire:(date:Date)=> void

}
 let Employee : employee ={
    id:1, 
    name:"Kellen",
    retire:(date:Date) => {  
    console.log(date)
}
    
 }

function KgTLbs(weight:number| string): number {
    if (typeof weight === 'number' )
    return weight * 2.22
else 
 return parseInt(weight)*2.22
}
 KgTLbs(10)
 KgTLbs('30kg')

// INTERSECTION TYPES 
type Dragable = {
    drag:()=> void
}
type Resizable ={
    size:()=> void
}
type Uidev= Dragable & Resizable
let Textbox: Uidev = { 
drag:()=>{},
size:()=>{}

}

// LITERAL TYPES
type Quantity = 50  | 100 
let quantity :Quantity = 100

type Metric = 'cm' |'mm';

// // NULLABLE
function greet(name: string | null | undefined){
if (name ){
    console.log(name.toUpperCase());
} else 
console.log('holla');
}
greet(undefined)

// OPTINAL CHAINING

type Customer = {
    birtday ? : Date
}
function getCustomer(id:number): Customer |null | undefined {
 return id ===0 ? null : { birtday:new Date() }
}
let Customer = getCustomer(1)
console.log(Customer?.birtday?.getFullYear());

 // CALL OPTIONAL 
 let log : any = null
 log?.('a')