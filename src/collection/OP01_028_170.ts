
import Card, { CardType } from "../entities/Card";

export default class OP01_028_170 extends Card {
    public static id: string = "OP01_028_170";
    
    public static _name: string = "Green Star Rafflesia";

    public effect: string = "[Counter] Give your opponent's Leader or 1 of their Characters -2000 power during this turn.\r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-028_79c2bc_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_028_170.id;
    }
    
    public getType() : CardType {
        return OP01_028_170.type as CardType;
    }
    
    public getImage() {
        return OP01_028_170.image;
    }
    
    public getName() {
        return OP01_028_170._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_028_170.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_028_170.keywords;
    }
}
