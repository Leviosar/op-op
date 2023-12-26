
import Card, { CardType } from "../entities/Card";

export default class OP03_062_585 extends Card {
    public static id: string = "OP03_062_585";
    
    public static _name: string = "Kokoro";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck, reveal up to 1 [Water 7] type card other than [Kokoro] and add it to your hand. Then, place the rest at the bottom of the deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-062_a29a61_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Mermaid","Water 7"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_062_585.id;
    }
    
    public getType() : CardType {
        return OP03_062_585.type as CardType;
    }
    
    public getImage() {
        return OP03_062_585.image;
    }
    
    public getName() {
        return OP03_062_585._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_062_585.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_062_585.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_062_585.archetypes;
    }
    
    public getPower(): number {
        return OP03_062_585.power;
    }

    public getCounter(): number {
        return OP03_062_585.counter;
    }

    public getLife(): number {
        return OP03_062_585.life;
    }
}
