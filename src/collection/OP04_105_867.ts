
import Card from "../entities/Card";

export default class OP04_105_867 extends Card {
    public static id: string = "OP04_105_867";
    
    public static _name: string = "Charlotte Amande";

    public effect: string = "[Activate: Main] [Once Per Turn] You may trash 1 card with a [Trigger] from your hand: Rest up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-105_04f9c2_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_105_867.id
    }
    
    public getType() {
        return OP04_105_867.type
    }
    
    public getImage() {
        return OP04_105_867.image
    }
    
    public getName() {
        return OP04_105_867._name
    }
    
    public getCost(): number {
        return parseInt(OP04_105_867.cost)
    }
}
