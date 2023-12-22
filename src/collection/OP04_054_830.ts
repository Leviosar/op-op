
import Card from "../entities/Card";

export default class OP04_054_830 extends Card {
    public static id: string = "OP04_054_830";
    
    public static _name: string = "Page One";

    public effect: string = "[DON!! x1] [Once Per Turn] When you activate an Event, draw 1 card. Then, place 1 card from your hand at the bottom of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-054_4c109a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP04_054_830.id
    }
    
    public getType() {
        return OP04_054_830.type
    }
    
    public getImage() {
        return OP04_054_830.image
    }
    
    public getName() {
        return OP04_054_830._name
    }
    
    public getCost(): number {
        return parseInt(OP04_054_830.cost)
    }
}
