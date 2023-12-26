
import Card, { CardType } from "../entities/Card";

export default class OP03_012_628 extends Card {
    public static id: string = "OP03_012_628";
    
    public static _name: string = "Marshall D. Teach";

    public effect: string = "[When Attacking] You may trash 1 Red Character with 4000 Power or more: Draw 1 card. Then, this Character gains +1000 Power during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-012_618ce0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_012_628.id;
    }
    
    public getType() : CardType {
        return OP03_012_628.type as CardType;
    }
    
    public getImage() {
        return OP03_012_628.image;
    }
    
    public getName() {
        return OP03_012_628._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_012_628.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_012_628.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_012_628.archetypes;
    }
    
    public getPower(): number {
        return OP03_012_628.power;
    }

    public getCounter(): number {
        return OP03_012_628.counter;
    }

    public getLife(): number {
        return OP03_012_628.life;
    }
}
