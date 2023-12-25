
import Card, { CardType } from "../entities/Card";

export default class OP01_005_181 extends Card {
    public static id: string = "OP01_005_181";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] Return up to one Red Character other than [Uta] that costs 3 or less from your trash and to your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-005_d51122_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_005_181.id;
    }
    
    public getType() : CardType {
        return OP01_005_181.type as CardType;
    }
    
    public getImage() {
        return OP01_005_181.image;
    }
    
    public getName() {
        return OP01_005_181._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_005_181.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_005_181.keywords;
    }
    
    public getPower(): number {
        return OP01_005_181.power;
    }

    public getCounter(): number {
        return OP01_005_181.counter;
    }

    public getLife(): number {
        return OP01_005_181.life;
    }
}
