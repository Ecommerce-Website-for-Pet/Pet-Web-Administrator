export class Product{
    _id:any;
    name:string;
    price:number;
    label:string;
    category:string;
    image:[string];
    weight:[string];
    color:[string];
    description:string;
    benefit:string;
    instruction:string;

    constructor(){
        this._id="";
        this.name="";
        this.price=0;
        this.label="";
        this.category="";
        this.image=[""];
        this.weight=[""];
        this.color=[""];
        this.description="";
        this.benefit="";
        this.instruction="";
    }
}