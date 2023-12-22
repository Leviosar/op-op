
import Card from "../entities/Card";

export default class OP02_029_311 extends Card {
    public static id: string = "OP02_029_311";
    
    public static _name: string = "Carrot";

    public effect: string = "[End of Your Turn] Set up to 1 of your DON!! as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-029_065da4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP02_029_311.id
    }
    
    public getType() {
        return OP02_029_311.type
    }
    
    public getImage() {
        return OP02_029_311.image
    }
    
    public getName() {
        return OP02_029_311._name
    }
    
    public getCost(): number {
        return parseInt(OP02_029_311.cost)
    }
}
