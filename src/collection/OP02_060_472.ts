
import Card, { CardType } from "../entities/Card";

export default class OP02_060_472 extends Card {
    public static id: string = "OP02_060_472";
    
    public static _name: string = "Mohji";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-060_8efdc1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Buggy Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_060_472.id;
    }
    
    public getType() : CardType {
        return OP02_060_472.type as CardType;
    }
    
    public getImage() {
        return OP02_060_472.image;
    }
    
    public getName() {
        return OP02_060_472._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_060_472.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_060_472.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_060_472.archetypes;
    }
    
    public getPower(): number {
        return OP02_060_472.power;
    }

    public getCounter(): number {
        return OP02_060_472.counter;
    }

    public getLife(): number {
        return OP02_060_472.life;
    }
}
