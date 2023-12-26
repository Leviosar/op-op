
import Card, { CardType } from "../entities/Card";

export default class OP03_088_678 extends Card {
    public static id: string = "OP03_088_678";
    
    public static _name: string = "Fukuro";

    public effect: string = "This card cannot be K.O.ed by effects.\r\n<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-088_9f0e11_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["CP9"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_088_678.id;
    }
    
    public getType() : CardType {
        return OP03_088_678.type as CardType;
    }
    
    public getImage() {
        return OP03_088_678.image;
    }
    
    public getName() {
        return OP03_088_678._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_088_678.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_088_678.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_088_678.archetypes;
    }
    
    public getPower(): number {
        return OP03_088_678.power;
    }

    public getCounter(): number {
        return OP03_088_678.counter;
    }

    public getLife(): number {
        return OP03_088_678.life;
    }
}
