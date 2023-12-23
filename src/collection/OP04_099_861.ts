
import Card, { CardType } from "../entities/Card";

export default class OP04_099_861 extends Card {
    public static id: string = "OP04_099_861";
    
    public static _name: string = "Olin";

    public effect: string = "Also treat this card's name as [Charlotte Linlin] according to the rules.\r\n[Trigger] If you have 1 or less Life cards, play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-099_931210_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_099_861.id;
    }
    
    public getType() : CardType {
        return OP04_099_861.type as CardType;
    }
    
    public getImage() {
        return OP04_099_861.image;
    }
    
    public getName() {
        return OP04_099_861._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_099_861.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_099_861.keywords;
    }
}
