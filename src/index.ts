function CalculaterTax(income:number , TaxtYear: number):number{
    
    if(TaxtYear < 2022  )
    return income*1.2;
    return income*1.3;
}
CalculaterTax(10_000, 2022)


//OBJECTS
 let Employee :{
   readonly id:number,
    name:string,
    retire:(date:Date)=> void
}= {
    id:1, 
    name:"Kellen",
    retire:(date:Date) => {  
    console.log(date)
}
    
 }
