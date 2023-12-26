
import Card, { CardType } from "../entities/Card";

export default class OP01_070_199 extends Card {
    public static id: string = "OP01_070_199";
    
    public static _name: string = "Dracule Mihawk";

    public effect: string = "[On Play] Place up to 1 Character with a cost of 7 or less at the bottom of the owner's deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-070_efbd13_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "9";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea"];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_070_199.id;
    }
    
    public getType() : CardType {
        return OP01_070_199.type as CardType;
    }
    
    public getImage() {
        return OP01_070_199.image;
    }
    
    public getName() {
        return OP01_070_199._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_070_199.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_070_199.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_070_199.archetypes;
    }
    
    public getPower(): number {
        return OP01_070_199.power;
    }

    public getCounter(): number {
        return OP01_070_199.counter;
    }

    public getLife(): number {
        return OP01_070_199.life;
    }
}
