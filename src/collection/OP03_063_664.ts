
import Card, { CardType } from "../entities/Card";

export default class OP03_063_664 extends Card {
    public static id: string = "OP03_063_664";
    
    public static _name: string = "Zambai";

    public effect: string = "<Blocker>\r\n[On Play] DON!! -1: If your Leader has the {Water 7} type, Draw 1 card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-063_2ec682_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Water 7","Franky Family"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_063_664.id;
    }
    
    public getType() : CardType {
        return OP03_063_664.type as CardType;
    }
    
    public getImage() {
        return OP03_063_664.image;
    }
    
    public getName() {
        return OP03_063_664._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_063_664.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_063_664.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_063_664.archetypes;
    }
    
    public getPower(): number {
        return OP03_063_664.power;
    }

    public getCounter(): number {
        return OP03_063_664.counter;
    }

    public getLife(): number {
        return OP03_063_664.life;
    }
}
