
import Card, { CardType } from "../entities/Card";

export default class OP01_001_239 extends Card {
    public static id: string = "OP01_001_239";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[DON!!x1] [Your Turn] All your Characters gain +1000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-001_f413e3_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_001_239.id;
    }
    
    public getType() : CardType {
        return OP01_001_239.type as CardType;
    }
    
    public getImage() {
        return OP01_001_239.image;
    }
    
    public getName() {
        return OP01_001_239._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_001_239.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_001_239.keywords;
    }
}
