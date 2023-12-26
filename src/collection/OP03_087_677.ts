
import Card, { CardType } from "../entities/Card";

export default class OP03_087_677 extends Card {
    public static id: string = "OP03_087_677";
    
    public static _name: string = "Nero";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-087_787c53_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["CP9"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_087_677.id;
    }
    
    public getType() : CardType {
        return OP03_087_677.type as CardType;
    }
    
    public getImage() {
        return OP03_087_677.image;
    }
    
    public getName() {
        return OP03_087_677._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_087_677.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_087_677.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_087_677.archetypes;
    }
    
    public getPower(): number {
        return OP03_087_677.power;
    }

    public getCounter(): number {
        return OP03_087_677.counter;
    }

    public getLife(): number {
        return OP03_087_677.life;
    }
}
