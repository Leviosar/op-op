
import Card from "../entities/Card";

export default class OP04_066_775 extends Card {
    public static id: string = "OP04_066_775";
    
    public static _name: string = "Ms. Valentine (Mikita)";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal 1 card with \"Baroque Works\" in one of its types and add it to your hand. Place the remaining cards at the bottom of your deck in any order.\r\n\r\n[Trigger] DON!! -1: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-066_f9aa4d_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_066_775.id
    }
    
    public getType() {
        return OP04_066_775.type
    }
    
    public getImage() {
        return OP04_066_775.image
    }
    
    public getName() {
        return OP04_066_775._name
    }
    
    public getCost(): number {
        return parseInt(OP04_066_775.cost)
    }
}
