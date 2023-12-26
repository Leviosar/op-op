
import Card, { CardType } from "../entities/Card";

export default class OP03_011_627 extends Card {
    public static id: string = "OP03_011_627";
    
    public static _name: string = "Blamenco";

    public effect: string = "[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters -2000 Power during this turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-011_4b9e53_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_011_627.id;
    }
    
    public getType() : CardType {
        return OP03_011_627.type as CardType;
    }
    
    public getImage() {
        return OP03_011_627.image;
    }
    
    public getName() {
        return OP03_011_627._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_011_627.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_011_627.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_011_627.archetypes;
    }
    
    public getPower(): number {
        return OP03_011_627.power;
    }

    public getCounter(): number {
        return OP03_011_627.counter;
    }

    public getLife(): number {
        return OP03_011_627.life;
    }
}
