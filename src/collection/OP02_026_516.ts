
import Card from "../entities/Card";

export default class OP02_026_516 extends Card {
    public static id: string = "OP02_026_516";
    
    public static _name: string = "Sanji";

    public effect: string = "[Once Per Turn] When you play a Character without an effect from your hand, if you have 3 or less Characters in play, set up to 2 of your Don!! to active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-026_47030f_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP02_026_516.id
    }
    
    public getType() {
        return OP02_026_516.type
    }
    
    public getImage() {
        return OP02_026_516.image
    }
    
    public getName() {
        return OP02_026_516._name
    }
    
    public getCost(): number {
        return parseInt(OP02_026_516.cost)
    }
}
