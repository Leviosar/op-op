
import Card, { CardType } from "../entities/Card";

export default class OP03_089_599 extends Card {
    public static id: string = "OP03_089_599";
    
    public static _name: string = "Brannew";

    public effect: string = "[On Play] Look at the top 3 cards of your deck, reveal 1 {Navy} type card other than [Brannew] and add it to your hand. Then trash the remaining cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-089_557b43_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_089_599.id;
    }
    
    public getType() : CardType {
        return OP03_089_599.type as CardType;
    }
    
    public getImage() {
        return OP03_089_599.image;
    }
    
    public getName() {
        return OP03_089_599._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_089_599.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_089_599.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_089_599.archetypes;
    }
    
    public getPower(): number {
        return OP03_089_599.power;
    }

    public getCounter(): number {
        return OP03_089_599.counter;
    }

    public getLife(): number {
        return OP03_089_599.life;
    }
}
