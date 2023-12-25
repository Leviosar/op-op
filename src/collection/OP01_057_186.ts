
import Card, { CardType } from "../entities/Card";

export default class OP01_057_186 extends Card {
    public static id: string = "OP01_057_186";
    
    public static _name: string = "Paradise Waterfall";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +2000 power during this battle. Then, set 1 of your Characters as active.\r\n[Trigger] K.O. 1 of your opponent's rested Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-057_338da4_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_057_186.id;
    }
    
    public getType() : CardType {
        return OP01_057_186.type as CardType;
    }
    
    public getImage() {
        return OP01_057_186.image;
    }
    
    public getName() {
        return OP01_057_186._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_057_186.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_057_186.keywords;
    }
    
    public getPower(): number {
        return OP01_057_186.power;
    }

    public getCounter(): number {
        return OP01_057_186.counter;
    }

    public getLife(): number {
        return OP01_057_186.life;
    }
}
