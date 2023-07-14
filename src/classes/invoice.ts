import {HasFormater} from '../interfaces/HasFormater.js'

export class Invoice implements  HasFormater{
 
    constructor(
        readonly client : string,
        private details:string,
        public amount: number
    ){}
    format(){
        return `${this.client} owes ${this.amount} for ${this.details} `
    }
    
    }