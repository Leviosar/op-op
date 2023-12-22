
import Card from "../entities/Card";

export default class OP04_001_730 extends Card {
    public static id: string = "OP04_001_730";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "This Leader cannot attack.\r\n[Activate: Main] [Once per Turn] (2) (You may rest the specified number of DON!! cards in your cost area): Draw 1 card, and up to 1 of your Characters gains <Rush> during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-001_69a8e4_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "0";
    
    public getId() {
        return OP04_001_730.id
    }
    
    public getType() {
        return OP04_001_730.type
    }
    
    public getImage() {
        return OP04_001_730.image
    }
    
    public getName() {
        return OP04_001_730._name
    }
    
    public getCost(): number {
        return parseInt(OP04_001_730.cost)
    }
}
