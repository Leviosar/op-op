
import Card from "../entities/Card";

export default class OP03_105_692 extends Card {
    public static id: string = "OP03_105_692";
    
    public static _name: string = "Charlotte Oven";

    public effect: string = "[DON!! x1] [When Attacking] You may discard 1 card with [Trigger] from your hand: This Character gains +3000 power during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-105_349733_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_105_692.id
    }
    
    public getType() {
        return OP03_105_692.type
    }
    
    public getImage() {
        return OP03_105_692.image
    }
    
    public getName() {
        return OP03_105_692._name
    }
    
    public getCost(): number {
        return parseInt(OP03_105_692.cost)
    }
}
