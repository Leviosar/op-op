
import Card, { CardType } from "../entities/Card";

export default class OP01_072_161 extends Card {
    public static id: string = "OP01_072_161";
    
    public static _name: string = "Smiley";

    public effect: string = "[DON!!x1] [Your Turn] For each card in your hand, +1000 power for this character.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-072_6b7035_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 1000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_072_161.id;
    }
    
    public getType() : CardType {
        return OP01_072_161.type as CardType;
    }
    
    public getImage() {
        return OP01_072_161.image;
    }
    
    public getName() {
        return OP01_072_161._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_072_161.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_072_161.keywords;
    }
    
    public getPower(): number {
        return OP01_072_161.power;
    }

    public getCounter(): number {
        return OP01_072_161.counter;
    }

    public getLife(): number {
        return OP01_072_161.life;
    }
}
