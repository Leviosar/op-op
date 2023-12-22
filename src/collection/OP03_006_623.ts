
import Card from "../entities/Card";

export default class OP03_006_623 extends Card {
    public static id: string = "OP03_006_623";
    
    public static _name: string = "Curiel";

    public effect: string = "This Character cannot attack the Leader on the turn in which it is played.\r\n[DON!! x1] This character gains <Rush>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-006_377660_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_006_623.id
    }
    
    public getType() {
        return OP03_006_623.type
    }
    
    public getImage() {
        return OP03_006_623.image
    }
    
    public getName() {
        return OP03_006_623._name
    }
    
    public getCost(): number {
        return parseInt(OP03_006_623.cost)
    }
}
