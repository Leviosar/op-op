
import Card, { CardType } from "../entities/Card";

export default class OP03_022_708 extends Card {
    public static id: string = "OP03_022_708";
    
    public static _name: string = "Arlong";

    public effect: string = "[DON!!x2] [When Attacking] (1) (You may rest the designated number for DON!! in your Cost Area): Play up to 1 Character card with a cost of 4 or less with <Trigger> from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-022_8e7ded_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = ["Trigger"];
    
    public static archetypes: string[] = ["Fish-Man","East Blue","Arlong Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP03_022_708.id;
    }
    
    public getType() : CardType {
        return OP03_022_708.type as CardType;
    }
    
    public getImage() {
        return OP03_022_708.image;
    }
    
    public getName() {
        return OP03_022_708._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_022_708.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_022_708.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_022_708.archetypes;
    }
    
    public getPower(): number {
        return OP03_022_708.power;
    }

    public getCounter(): number {
        return OP03_022_708.counter;
    }

    public getLife(): number {
        return OP03_022_708.life;
    }
}
