
import Card from "../entities/Card";

export default class OP01_039_78 extends Card {
    public static id: string = "OP01_039_78";
    
    public static _name: string = "Killer";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card you can change the attack target to this card.)\r\n[DON!! x1] [On Block] If you control 3 or more Characters, draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-039_12b430_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_039_78.id
    }
    
    public getType() {
        return OP01_039_78.type
    }
    
    public getImage() {
        return OP01_039_78.image
    }
    
    public getName() {
        return OP01_039_78._name
    }
    
    public getCost(): number {
        return parseInt(OP01_039_78.cost)
    }
}
