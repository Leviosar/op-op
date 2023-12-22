
import Card from "../entities/Card";

export default class OP03_033_643 extends Card {
    public static id: string = "OP03_033_643";
    
    public static _name: string = "Hatchan";

    public effect: string = "[Trigger] If your Leader has the {East Blue} type, play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-033_d31fe8_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_033_643.id
    }
    
    public getType() {
        return OP03_033_643.type
    }
    
    public getImage() {
        return OP03_033_643.image
    }
    
    public getName() {
        return OP03_033_643._name
    }
    
    public getCost(): number {
        return parseInt(OP03_033_643.cost)
    }
}