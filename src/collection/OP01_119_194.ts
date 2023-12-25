
import Card, { CardType } from "../entities/Card";

export default class OP01_119_194 extends Card {
    public static id: string = "OP01_119_194";
    
    public static _name: string = "Thunder Bagua";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +4000 power during this battle. Then, if you have 2 or less Life cards, add 1 DON!! card from your DON!! deck and rest it.\r\n[Trigger] Add 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-119_5df30b_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_119_194.id;
    }
    
    public getType() : CardType {
        return OP01_119_194.type as CardType;
    }
    
    public getImage() {
        return OP01_119_194.image;
    }
    
    public getName() {
        return OP01_119_194._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_119_194.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_119_194.keywords;
    }
    
    public getPower(): number {
        return OP01_119_194.power;
    }

    public getCounter(): number {
        return OP01_119_194.counter;
    }

    public getLife(): number {
        return OP01_119_194.life;
    }
}
