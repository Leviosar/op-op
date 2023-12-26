
import Card, { CardType } from "../entities/Card";

export default class OP01_044_71 extends Card {
    public static id: string = "OP01_044_71";
    
    public static _name: string = "Shachi";

    public effect: string = "<Blocker>\r\n[On Play] If you don't control [Penguin], play 1 [Penguin] from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-044_5fd83b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_044_71.id;
    }
    
    public getType() : CardType {
        return OP01_044_71.type as CardType;
    }
    
    public getImage() {
        return OP01_044_71.image;
    }
    
    public getName() {
        return OP01_044_71._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_044_71.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_044_71.keywords;
    }
    
    public getPower(): number {
        return OP01_044_71.power;
    }

    public getCounter(): number {
        return OP01_044_71.counter;
    }

    public getLife(): number {
        return OP01_044_71.life;
    }
}
