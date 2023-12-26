
import Card, { CardType } from "../entities/Card";

export default class OP03_057_660 extends Card {
    public static id: string = "OP03_057_660";
    
    public static _name: string = "Three Thousand Worlds";

    public effect: string = "[Main] Place up to 1 Character with a cost of 5 or less at the bottom of its owner's deck.\r\n\r\n[Trigger] Place up to 1 Character with a cost of 3 or less at the bottom of its owner's deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-057_8e0c4c_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_057_660.id;
    }
    
    public getType() : CardType {
        return OP03_057_660.type as CardType;
    }
    
    public getImage() {
        return OP03_057_660.image;
    }
    
    public getName() {
        return OP03_057_660._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_057_660.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_057_660.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_057_660.archetypes;
    }
    
    public getPower(): number {
        return OP03_057_660.power;
    }

    public getCounter(): number {
        return OP03_057_660.counter;
    }

    public getLife(): number {
        return OP03_057_660.life;
    }
}
