
import Card, { CardType } from "../entities/Card";

export default class OP01_110_211 extends Card {
    public static id: string = "OP01_110_211";
    
    public static _name: string = "Bao Huang";

    public effect: string = "[On Play] Choose 2 cards from your opponent's hand; your opponent reveals those cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-110_698bc8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_110_211.id;
    }
    
    public getType() : CardType {
        return OP01_110_211.type as CardType;
    }
    
    public getImage() {
        return OP01_110_211.image;
    }
    
    public getName() {
        return OP01_110_211._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_110_211.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_110_211.keywords;
    }
    
    public getPower(): number {
        return OP01_110_211.power;
    }

    public getCounter(): number {
        return OP01_110_211.counter;
    }

    public getLife(): number {
        return OP01_110_211.life;
    }
}
