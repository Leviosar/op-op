
import Card, { CardType } from "../entities/Card";

export default class OP03_041_611 extends Card {
    public static id: string = "OP03_041_611";
    
    public static _name: string = "Usopp";

    public effect: string = "<Rush>\r\n[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-041_940e44_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetype: string[] = ["East Blue"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_041_611.id;
    }
    
    public getType() : CardType {
        return OP03_041_611.type as CardType;
    }
    
    public getImage() {
        return OP03_041_611.image;
    }
    
    public getName() {
        return OP03_041_611._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_041_611.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_041_611.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_041_611.archetypes;
    }
    
    public getPower(): number {
        return OP03_041_611.power;
    }

    public getCounter(): number {
        return OP03_041_611.counter;
    }

    public getLife(): number {
        return OP03_041_611.life;
    }
}
