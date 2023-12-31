
import Card, { CardType } from "../entities/Card";

export default class OP03_111_697 extends Card {
    public static id: string = "OP03_111_697";
    
    public static _name: string = "Charlotte Praline";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-111_cd9c0f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Mermaid","Sun Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_111_697.id;
    }
    
    public getType() : CardType {
        return OP03_111_697.type as CardType;
    }
    
    public getImage() {
        return OP03_111_697.image;
    }
    
    public getName() {
        return OP03_111_697._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_111_697.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_111_697.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_111_697.archetypes;
    }
    
    public getPower(): number {
        return OP03_111_697.power;
    }

    public getCounter(): number {
        return OP03_111_697.counter;
    }

    public getLife(): number {
        return OP03_111_697.life;
    }
}
