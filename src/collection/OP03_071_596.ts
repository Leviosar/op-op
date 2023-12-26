
import Card, { CardType } from "../entities/Card";

export default class OP03_071_596 extends Card {
    public static id: string = "OP03_071_596";
    
    public static _name: string = "Rob Lucci";

    public effect: string = "[When Attacking] DON!! -1: Rest up to 1 of your opponent's Characters with a cost of 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-071_1de451_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_071_596.id;
    }
    
    public getType() : CardType {
        return OP03_071_596.type as CardType;
    }
    
    public getImage() {
        return OP03_071_596.image;
    }
    
    public getName() {
        return OP03_071_596._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_071_596.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_071_596.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_071_596.archetypes;
    }
    
    public getPower(): number {
        return OP03_071_596.power;
    }

    public getCounter(): number {
        return OP03_071_596.counter;
    }

    public getLife(): number {
        return OP03_071_596.life;
    }
}
