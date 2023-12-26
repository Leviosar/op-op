
import Card, { CardType } from "../entities/Card";

export default class OP03_042_653 extends Card {
    public static id: string = "OP03_042_653";
    
    public static _name: string = "Usopp Pirates";

    public effect: string = "[On Play] Choose up to 1 [Usopp] from your Trash and add it to your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-042_50e216_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_042_653.id;
    }
    
    public getType() : CardType {
        return OP03_042_653.type as CardType;
    }
    
    public getImage() {
        return OP03_042_653.image;
    }
    
    public getName() {
        return OP03_042_653._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_042_653.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_042_653.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_042_653.archetypes;
    }
    
    public getPower(): number {
        return OP03_042_653.power;
    }

    public getCounter(): number {
        return OP03_042_653.counter;
    }

    public getLife(): number {
        return OP03_042_653.life;
    }
}
