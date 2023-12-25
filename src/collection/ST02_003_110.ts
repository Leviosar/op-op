
import Card, { CardType } from "../entities/Card";

export default class ST02_003_110 extends Card {
    public static id: string = "ST02_003_110";
    
    public static _name: string = "Urouge";

    public effect: string = "[DON!! ×1] If you have 3 or more Characters, this Character gains +2000 Power.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-003_b3c502_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_003_110.id;
    }
    
    public getType() : CardType {
        return ST02_003_110.type as CardType;
    }
    
    public getImage() {
        return ST02_003_110.image;
    }
    
    public getName() {
        return ST02_003_110._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_003_110.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_003_110.keywords;
    }
    
    public getPower(): number {
        return ST02_003_110.power;
    }

    public getCounter(): number {
        return ST02_003_110.counter;
    }

    public getLife(): number {
        return ST02_003_110.life;
    }
}
