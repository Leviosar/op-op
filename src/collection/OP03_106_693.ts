
import Card from "../entities/Card";

export default class OP03_106_693 extends Card {
    public static id: string = "OP03_106_693";
    
    public static _name: string = "Charlotte Oven";

    public effect: string = "[DON!! x1] [When Attacking] You may discard 1 card with [Trigger] from your hand: This Character gains +3000 power during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-106_541f1e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_106_693.id
    }
    
    public getType() {
        return OP03_106_693.type
    }
    
    public getImage() {
        return OP03_106_693.image
    }
    
    public getName() {
        return OP03_106_693._name
    }
    
    public getCost(): number {
        return parseInt(OP03_106_693.cost)
    }
}
