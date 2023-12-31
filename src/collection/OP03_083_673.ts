
import Card, { CardType } from "../entities/Card";

export default class OP03_083_673 extends Card {
    public static id: string = "OP03_083_673";
    
    public static _name: string = "Corgi";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, and place up to 2 of them in the trash. Then place the remaining cards on the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-083_757a7e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["World Government"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_083_673.id;
    }
    
    public getType() : CardType {
        return OP03_083_673.type as CardType;
    }
    
    public getImage() {
        return OP03_083_673.image;
    }
    
    public getName() {
        return OP03_083_673._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_083_673.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_083_673.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_083_673.archetypes;
    }
    
    public getPower(): number {
        return OP03_083_673.power;
    }

    public getCounter(): number {
        return OP03_083_673.counter;
    }

    public getLife(): number {
        return OP03_083_673.life;
    }
}
