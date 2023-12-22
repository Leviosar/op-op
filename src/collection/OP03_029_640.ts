
import Card from "../entities/Card";

export default class OP03_029_640 extends Card {
    public static id: string = "OP03_029_640";
    
    public static _name: string = "Choo";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-029_075c53_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_029_640.id
    }
    
    public getType() {
        return OP03_029_640.type
    }
    
    public getImage() {
        return OP03_029_640.image
    }
    
    public getName() {
        return OP03_029_640._name
    }
    
    public getCost(): number {
        return parseInt(OP03_029_640.cost)
    }
}
