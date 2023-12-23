
import Card, { CardType } from "../entities/Card";

export default class OP02_008_443 extends Card {
    public static id: string = "OP02_008_443";
    
    public static _name: string = "Jozu";

    public effect: string = "[DON!! x1] If you have 2 or less Life cards and your Leader's type includes \"Whitebeard Pirates\", this Character gains <Rush>.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-008_54d5f7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Rush"];
    
    public getId() {
        return OP02_008_443.id;
    }
    
    public getType() : CardType {
        return OP02_008_443.type as CardType;
    }
    
    public getImage() {
        return OP02_008_443.image;
    }
    
    public getName() {
        return OP02_008_443._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_008_443.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_008_443.keywords;
    }
}
