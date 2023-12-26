
import Card, { CardType } from "../entities/Card";

export default class OP01_053_182 extends Card {
    public static id: string = "OP01_053_182";
    
    public static _name: string = "Wire";

    public effect: string = "[On Play] Return up to one Red Character other than [Uta] that costs 3 or less from your trash and to your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-053_851305_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_053_182.id;
    }
    
    public getType() : CardType {
        return OP01_053_182.type as CardType;
    }
    
    public getImage() {
        return OP01_053_182.image;
    }
    
    public getName() {
        return OP01_053_182._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_053_182.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_053_182.keywords;
    }
    
    public getPower(): number {
        return OP01_053_182.power;
    }

    public getCounter(): number {
        return OP01_053_182.counter;
    }

    public getLife(): number {
        return OP01_053_182.life;
    }
}
