
import Card, { CardType } from "../entities/Card";

export default class ST03_014_107 extends Card {
    public static id: string = "ST03_014_107";
    
    public static _name: string = "Marshall D. Teach";

    public effect: string = "[On Play] Return a Character that costs 3 or less to their owner's hand";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-014_05ecda_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_014_107.id;
    }
    
    public getType() : CardType {
        return ST03_014_107.type as CardType;
    }
    
    public getImage() {
        return ST03_014_107.image;
    }
    
    public getName() {
        return ST03_014_107._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_014_107.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_014_107.keywords;
    }
    
    public getPower(): number {
        return ST03_014_107.power;
    }

    public getCounter(): number {
        return ST03_014_107.counter;
    }

    public getLife(): number {
        return ST03_014_107.life;
    }
}
