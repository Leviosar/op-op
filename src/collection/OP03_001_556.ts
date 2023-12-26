
import Card, { CardType } from "../entities/Card";

export default class OP03_001_556 extends Card {
    public static id: string = "OP03_001_556";
    
    public static _name: string = "Portgas D. Ace";

    public effect: string = "When this Leader attacks or is being attacked, you may trash any number of Event or Stage cards from your hand. For each card you trashed, +1000 Power for this Leader during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-001_c8d86f_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP03_001_556.id;
    }
    
    public getType() : CardType {
        return OP03_001_556.type as CardType;
    }
    
    public getImage() {
        return OP03_001_556.image;
    }
    
    public getName() {
        return OP03_001_556._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_001_556.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_001_556.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_001_556.archetypes;
    }
    
    public getPower(): number {
        return OP03_001_556.power;
    }

    public getCounter(): number {
        return OP03_001_556.counter;
    }

    public getLife(): number {
        return OP03_001_556.life;
    }
}
