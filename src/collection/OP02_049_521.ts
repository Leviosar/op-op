
import Card from "../entities/Card";

export default class OP02_049_521 extends Card {
    public static id: string = "OP02_049_521";
    
    public static _name: string = "Emporio Ivankov";

    public effect: string = "[End of your turn] If you have 0 cards in your hand, draw 2 cards.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-049_5bf199_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP02_049_521.id
    }
    
    public getType() {
        return OP02_049_521.type
    }
    
    public getImage() {
        return OP02_049_521.image
    }
    
    public getName() {
        return OP02_049_521._name
    }
    
    public getCost(): number {
        return parseInt(OP02_049_521.cost)
    }
}