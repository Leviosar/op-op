
import Card, { CardType } from "../entities/Card";

export default class OP03_084_674 extends Card {
    public static id: string = "OP03_084_674";
    
    public static _name: string = "Jerry";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-084_9c327f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["CP6"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_084_674.id;
    }
    
    public getType() : CardType {
        return OP03_084_674.type as CardType;
    }
    
    public getImage() {
        return OP03_084_674.image;
    }
    
    public getName() {
        return OP03_084_674._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_084_674.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_084_674.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_084_674.archetypes;
    }
    
    public getPower(): number {
        return OP03_084_674.power;
    }

    public getCounter(): number {
        return OP03_084_674.counter;
    }

    public getLife(): number {
        return OP03_084_674.life;
    }
}
