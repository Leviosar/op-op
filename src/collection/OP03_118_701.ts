
import Card, { CardType } from "../entities/Card";

export default class OP03_118_701 extends Card {
    public static id: string = "OP03_118_701";
    
    public static _name: string = "Ikoku Sovereignty";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +5000 power during this battle.\r\n[Trigger] You may discard 2 cards from your hand: Add up to 1 card from the top of your deck to the top of your life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-118_60abce_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Four Emperors","Big Mom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_118_701.id;
    }
    
    public getType() : CardType {
        return OP03_118_701.type as CardType;
    }
    
    public getImage() {
        return OP03_118_701.image;
    }
    
    public getName() {
        return OP03_118_701._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_118_701.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_118_701.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_118_701.archetypes;
    }
    
    public getPower(): number {
        return OP03_118_701.power;
    }

    public getCounter(): number {
        return OP03_118_701.counter;
    }

    public getLife(): number {
        return OP03_118_701.life;
    }
}
