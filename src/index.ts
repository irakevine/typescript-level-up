function CalculaterTax(income:number , TaxtYear: number):number{
    
    if(TaxtYear < 2022  )
    return income*1.2;
    return income*1.3;

    
}
CalculaterTax(10_000, 2022)