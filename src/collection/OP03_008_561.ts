
import Card, { CardType } from "../entities/Card";

export default class OP03_008_561 extends Card {
    public static id: string = "OP03_008_561";
    
    public static _name: string = "Buggy";

    public effect: string = "This Character can't be K.O.'ed in battle with Slash attribute Characters and Leaders.\r\n\r\n[On Play] Look at the top 5 cards of your deck, reveal up to 1 Red Event card and add it to your hand. Place the rest of the cards at the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-008_e9736e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Buggy Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_008_561.id;
    }
    
    public getType() : CardType {
        return OP03_008_561.type as CardType;
    }
    
    public getImage() {
        return OP03_008_561.image;
    }
    
    public getName() {
        return OP03_008_561._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_008_561.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_008_561.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_008_561.archetypes;
    }
    
    public getPower(): number {
        return OP03_008_561.power;
    }

    public getCounter(): number {
        return OP03_008_561.counter;
    }

    public getLife(): number {
        return OP03_008_561.life;
    }
}
