
import Card from "../entities/Card";

export default class OP03_065_665 extends Card {
    public static id: string = "OP03_065_665";
    
    public static _name: string = "Chimney & Gonbe";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-065_3534c5_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_065_665.id
    }
    
    public getType() {
        return OP03_065_665.type
    }
    
    public getImage() {
        return OP03_065_665.image
    }
    
    public getName() {
        return OP03_065_665._name
    }
    
    public getCost(): number {
        return parseInt(OP03_065_665.cost)
    }
}
