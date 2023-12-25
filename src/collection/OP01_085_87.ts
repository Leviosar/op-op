
import Card, { CardType } from "../entities/Card";

export default class OP01_085_87 extends Card {
    public static id: string = "OP01_085_87";
    
    public static _name: string = "Mr. 3 (Galdino)";

    public effect: string = "[On Play] If your Leader is {Baroque Works} type, choose 1 of your opponent's cost 4 or lower Character, until the end of your opponent's next turn, the chosen Character cannot Attack.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-085_9a4880_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_085_87.id;
    }
    
    public getType() : CardType {
        return OP01_085_87.type as CardType;
    }
    
    public getImage() {
        return OP01_085_87.image;
    }
    
    public getName() {
        return OP01_085_87._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_085_87.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_085_87.keywords;
    }
    
    public getPower(): number {
        return OP01_085_87.power;
    }

    public getCounter(): number {
        return OP01_085_87.counter;
    }

    public getLife(): number {
        return OP01_085_87.life;
    }
}
