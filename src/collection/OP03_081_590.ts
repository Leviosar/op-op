
import Card, { CardType } from "../entities/Card";

export default class OP03_081_590 extends Card {
    public static id: string = "OP03_081_590";
    
    public static _name: string = "Kalifa";

    public effect: string = "[On Play] Draw 2 cards, and trash 2 cards from your hand. Then, reduce the cost of up to 1 of your opponent's Characters by 2 for the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-081_0bcc6e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["CP9"];
    
    public static power: number = 4000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_081_590.id;
    }
    
    public getType() : CardType {
        return OP03_081_590.type as CardType;
    }
    
    public getImage() {
        return OP03_081_590.image;
    }
    
    public getName() {
        return OP03_081_590._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_081_590.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_081_590.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_081_590.archetypes;
    }
    
    public getPower(): number {
        return OP03_081_590.power;
    }

    public getCounter(): number {
        return OP03_081_590.counter;
    }

    public getLife(): number {
        return OP03_081_590.life;
    }
}
