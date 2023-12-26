
import Card, { CardType } from "../entities/Card";

export default class OP01_113_79 extends Card {
    public static id: string = "OP01_113_79";
    
    public static _name: string = "Holdem";

    public effect: string = "[On K.O.] Add 1 DON!! from your DON!! deck to your cost area rested.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-113_4bbf2b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates","SMILE"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_113_79.id;
    }
    
    public getType() : CardType {
        return OP01_113_79.type as CardType;
    }
    
    public getImage() {
        return OP01_113_79.image;
    }
    
    public getName() {
        return OP01_113_79._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_113_79.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_113_79.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_113_79.archetypes;
    }
    
    public getPower(): number {
        return OP01_113_79.power;
    }

    public getCounter(): number {
        return OP01_113_79.counter;
    }

    public getLife(): number {
        return OP01_113_79.life;
    }
}
