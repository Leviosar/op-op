
import Card, { CardType } from "../entities/Card";

export default class OP03_060_662 extends Card {
    public static id: string = "OP03_060_662";
    
    public static _name: string = "Kalifa";

    public effect: string = "[When Attacking] DON!! -1: Draw 2 cards, then discard 1 card from hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-060_310eb5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 4000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_060_662.id;
    }
    
    public getType() : CardType {
        return OP03_060_662.type as CardType;
    }
    
    public getImage() {
        return OP03_060_662.image;
    }
    
    public getName() {
        return OP03_060_662._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_060_662.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_060_662.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_060_662.archetypes;
    }
    
    public getPower(): number {
        return OP03_060_662.power;
    }

    public getCounter(): number {
        return OP03_060_662.counter;
    }

    public getLife(): number {
        return OP03_060_662.life;
    }
}
