import { CartItems } from "./CartItems";
export class Cart{
    item:CartItems[]=[];
    get totalPrice():number{
        let totalPrice=0;
        this.item.forEach(item =>{
            totalPrice +=item.price
        })
        return totalPrice;
    }
}