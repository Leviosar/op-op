
import Card, { CardType } from "../entities/Card";

export default class OP03_059_620 extends Card {
    public static id: string = "OP03_059_620";
    
    public static _name: string = "Kaku";

    public effect: string = "[When Attacking] [DON!! -1] This Character gains <Banish> for the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-059_fd329c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Banish"];
    
    public static archetypes: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_059_620.id;
    }
    
    public getType() : CardType {
        return OP03_059_620.type as CardType;
    }
    
    public getImage() {
        return OP03_059_620.image;
    }
    
    public getName() {
        return OP03_059_620._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_059_620.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_059_620.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_059_620.archetypes;
    }
    
    public getPower(): number {
        return OP03_059_620.power;
    }

    public getCounter(): number {
        return OP03_059_620.counter;
    }

    public getLife(): number {
        return OP03_059_620.life;
    }
}
