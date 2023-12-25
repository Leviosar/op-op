
import Card, { CardType } from "../entities/Card";

export default class OP01_082_118 extends Card {
    public static id: string = "OP01_082_118";
    
    public static _name: string = "Monet";

    public effect: string = "[Trigger] Play this card.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-082_739bd3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_082_118.id;
    }
    
    public getType() : CardType {
        return OP01_082_118.type as CardType;
    }
    
    public getImage() {
        return OP01_082_118.image;
    }
    
    public getName() {
        return OP01_082_118._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_082_118.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_082_118.keywords;
    }
    
    public getPower(): number {
        return OP01_082_118.power;
    }

    public getCounter(): number {
        return OP01_082_118.counter;
    }

    public getLife(): number {
        return OP01_082_118.life;
    }
}
