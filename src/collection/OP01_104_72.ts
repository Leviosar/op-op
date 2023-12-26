
import Card, { CardType } from "../entities/Card";

export default class OP01_104_72 extends Card {
    public static id: string = "OP01_104_72";
    
    public static _name: string = "Speed";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-104_b7e709_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_104_72.id;
    }
    
    public getType() : CardType {
        return OP01_104_72.type as CardType;
    }
    
    public getImage() {
        return OP01_104_72.image;
    }
    
    public getName() {
        return OP01_104_72._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_104_72.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_104_72.keywords;
    }
    
    public getPower(): number {
        return OP01_104_72.power;
    }

    public getCounter(): number {
        return OP01_104_72.counter;
    }

    public getLife(): number {
        return OP01_104_72.life;
    }
}
