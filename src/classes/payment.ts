import {HasFormater} from '../interfaces/HasFormater.js'

export class Payment implements  HasFormater{
 
    constructor(
        readonly receipent : string,
        private details:string,
        public amount: number
    ){}
    format(){
        return `${this.receipent} is brought ${this.details} and pays  ${this.amount}`
    }
    
    }