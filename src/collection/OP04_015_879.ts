
import Card, { CardType } from "../entities/Card";

export default class OP04_015_879 extends Card {
    public static id: string = "OP04_015_879";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters −2000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-015_068ca5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_015_879.id;
    }
    
    public getType() : CardType {
        return OP04_015_879.type as CardType;
    }
    
    public getImage() {
        return OP04_015_879.image;
    }
    
    public getName() {
        return OP04_015_879._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_015_879.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_015_879.keywords;
    }
}
