
import Card, { CardType } from "../entities/Card";

export default class OP01_105_209 extends Card {
    public static id: string = "OP01_105_209";
    
    public static _name: string = "Bao Huang";

    public effect: string = "[On Play] Choose 2 cards from your opponent's hand; your opponent reveals those cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-105_6182ff_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_105_209.id;
    }
    
    public getType() : CardType {
        return OP01_105_209.type as CardType;
    }
    
    public getImage() {
        return OP01_105_209.image;
    }
    
    public getName() {
        return OP01_105_209._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_105_209.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_105_209.keywords;
    }
}
