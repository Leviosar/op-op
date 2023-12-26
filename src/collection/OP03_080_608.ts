
import Card, { CardType } from "../entities/Card";

export default class OP03_080_608 extends Card {
    public static id: string = "OP03_080_608";
    
    public static _name: string = "Kaku";

    public effect: string = "[On Play] You may return 2 cards with a type including \"CP\" from your trash to the bottom of your deck in any order: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-080_29b414_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["CP9"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_080_608.id;
    }
    
    public getType() : CardType {
        return OP03_080_608.type as CardType;
    }
    
    public getImage() {
        return OP03_080_608.image;
    }
    
    public getName() {
        return OP03_080_608._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_080_608.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_080_608.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_080_608.archetypes;
    }
    
    public getPower(): number {
        return OP03_080_608.power;
    }

    public getCounter(): number {
        return OP03_080_608.counter;
    }

    public getLife(): number {
        return OP03_080_608.life;
    }
}
