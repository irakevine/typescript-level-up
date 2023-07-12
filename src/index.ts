// function CalculaterTax(income:number , TaxtYear: number):number{
    
//     if(TaxtYear < 2022  )
//     return income*1.2;
//     return income*1.3;
// }
// CalculaterTax(10_000, 2022)


// //OBJECTS
// type employee ={
//     readonly id:number,
//      name:string,
//      retire:(date:Date)=> void

// }
//  let Employee : employee ={
//     id:1, 
//     name:"Kellen",
//     retire:(date:Date) => {  
//     console.log(date)
// }
    
//  }

function KgTLbs(weight:number| string): number {
    if (typeof weight === 'number' )
    return weight * 2.22
else 
 return parseInt(weight)*2.22
}
 KgTLbs(10)
 KgTLbs('30kg')