
import Card, { CardType } from "../entities/Card";

export default class OP03_114_605 extends Card {
    public static id: string = "OP03_114_605";
    
    public static _name: string = "Charlotte Linlin";

    public effect: string = "[On Play] If your Leader has the {Big Mom Pirates} type, place up to 1 card from the top of your deck at the top or bottom of your Life. Then, trash up to 1 card from the top of your opponent's Life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-114_f366fa_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "10";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Four Emperors","Big Mom Pirates"];
    
    public static power: number = 12000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_114_605.id;
    }
    
    public getType() : CardType {
        return OP03_114_605.type as CardType;
    }
    
    public getImage() {
        return OP03_114_605.image;
    }
    
    public getName() {
        return OP03_114_605._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_114_605.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_114_605.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_114_605.archetypes;
    }
    
    public getPower(): number {
        return OP03_114_605.power;
    }

    public getCounter(): number {
        return OP03_114_605.counter;
    }

    public getLife(): number {
        return OP03_114_605.life;
    }
}
