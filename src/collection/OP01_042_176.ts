
import Card, { CardType } from "../entities/Card";

export default class OP01_042_176 extends Card {
    public static id: string = "OP01_042_176";
    
    public static _name: string = "Komurasaki";

    public effect: string = "[On Play] (3) (You may rest the specified number of DON!! cards in your cost area.): If your Leader is [Kozuki Oden], set 1 of your {Wano Country} type Character cards with a cost of 3 or less as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-042_eefb8b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_042_176.id;
    }
    
    public getType() : CardType {
        return OP01_042_176.type as CardType;
    }
    
    public getImage() {
        return OP01_042_176.image;
    }
    
    public getName() {
        return OP01_042_176._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_042_176.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_042_176.keywords;
    }
    
    public getPower(): number {
        return OP01_042_176.power;
    }

    public getCounter(): number {
        return OP01_042_176.counter;
    }

    public getLife(): number {
        return OP01_042_176.life;
    }
}
