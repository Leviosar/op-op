
import Card from "../entities/Card";

export default class OP03_070_618 extends Card {
    public static id: string = "OP03_070_618";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[On Play] [DON!! -1] Trash 1 Character card with a cost of 5 from your hand: This Character gains <Rush> for this turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-070_ab0b22_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return OP03_070_618.id
    }
    
    public getType() {
        return OP03_070_618.type
    }
    
    public getImage() {
        return OP03_070_618.image
    }
    
    public getName() {
        return OP03_070_618._name
    }
    
    public getCost(): number {
        return parseInt(OP03_070_618.cost)
    }
}
