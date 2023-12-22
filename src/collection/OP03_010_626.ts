
import Card from "../entities/Card";

export default class OP03_010_626 extends Card {
    public static id: string = "OP03_010_626";
    
    public static _name: string = "Fossa";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-010_7cd85b_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_010_626.id
    }
    
    public getType() {
        return OP03_010_626.type
    }
    
    public getImage() {
        return OP03_010_626.image
    }
    
    public getName() {
        return OP03_010_626._name
    }
    
    public getCost(): number {
        return parseInt(OP03_010_626.cost)
    }
}
