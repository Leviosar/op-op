
import Card from "../entities/Card";

export default class OP03_034_638 extends Card {
    public static id: string = "OP03_034_638";
    
    public static _name: string = "Butchie";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 2 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-034_be5de6_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_034_638.id
    }
    
    public getType() {
        return OP03_034_638.type
    }
    
    public getImage() {
        return OP03_034_638.image
    }
    
    public getName() {
        return OP03_034_638._name
    }
    
    public getCost(): number {
        return parseInt(OP03_034_638.cost)
    }
}
