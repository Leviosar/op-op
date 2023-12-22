
import Card from "../entities/Card";

export default class OP04_064_758 extends Card {
    public static id: string = "OP04_064_758";
    
    public static _name: string = "Ms. All Sunday";

    public effect: string = "[On Play] Add up to 1 card from your DON!! deck and rest it. Then, if you have 6 or more DON!! cards on your field, draw 1 card.\r\n\r\n[Trigger] DON!! -2: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-064_401687_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP04_064_758.id
    }
    
    public getType() {
        return OP04_064_758.type
    }
    
    public getImage() {
        return OP04_064_758.image
    }
    
    public getName() {
        return OP04_064_758._name
    }
    
    public getCost(): number {
        return parseInt(OP04_064_758.cost)
    }
}
