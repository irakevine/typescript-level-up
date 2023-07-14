export class Invoice {
 
    constructor(
        readonly client : string,
        private details:string,
        public amount: number
    ){}
    format(){
        return `${this.client} buy ${this.details} and pays  ${this.amount}`
    }
    
    }