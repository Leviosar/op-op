
import Card, { CardType } from "../entities/Card";

export default class OP03_067_606 extends Card {
    public static id: string = "OP03_067_606";
    
    public static _name: string = "Peepley Lulu";

    public effect: string = "[DON!! x1] [When Attacking] If your Leader has the {Galley-La Company} type, add up to 1 DON!! from your DON!! deck and rest it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-067_52b159_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_067_606.id;
    }
    
    public getType() : CardType {
        return OP03_067_606.type as CardType;
    }
    
    public getImage() {
        return OP03_067_606.image;
    }
    
    public getName() {
        return OP03_067_606._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_067_606.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_067_606.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_067_606.archetypes;
    }
    
    public getPower(): number {
        return OP03_067_606.power;
    }

    public getCounter(): number {
        return OP03_067_606.counter;
    }

    public getLife(): number {
        return OP03_067_606.life;
    }
}
