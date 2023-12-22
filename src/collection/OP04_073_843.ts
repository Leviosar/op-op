
import Card from "../entities/Card";

export default class OP04_073_843 extends Card {
    public static id: string = "OP04_073_843";
    
    public static _name: string = "Mr. 13 & Ms. Friday";

    public effect: string = "[Activate: Main] You may trash this Character and 1 of your Characters with a type including \"Baroque Works\": Add up to 1 DON!! card from your DON!! deck and set it as active.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-073_7b9f76_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_073_843.id
    }
    
    public getType() {
        return OP04_073_843.type
    }
    
    public getImage() {
        return OP04_073_843.image
    }
    
    public getName() {
        return OP04_073_843._name
    }
    
    public getCost(): number {
        return parseInt(OP04_073_843.cost)
    }
}
