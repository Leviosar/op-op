
import Card, { CardType } from "../entities/Card";

export default class OP01_059_187 extends Card {
    public static id: string = "OP01_059_187";
    
    public static _name: string = "Beben!!";

    public effect: string = "[Main] You may trash 1 {Wano Country} type card from your hand: Set 1 of your {Wano Country} type Character cards with a cost of 3 or less as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-059_2f2ba7_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Wano Country"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_059_187.id;
    }
    
    public getType() : CardType {
        return OP01_059_187.type as CardType;
    }
    
    public getImage() {
        return OP01_059_187.image;
    }
    
    public getName() {
        return OP01_059_187._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_059_187.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_059_187.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_059_187.archetypes;
    }
    
    public getPower(): number {
        return OP01_059_187.power;
    }

    public getCounter(): number {
        return OP01_059_187.counter;
    }

    public getLife(): number {
        return OP01_059_187.life;
    }
}
