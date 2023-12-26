
import Card, { CardType } from "../entities/Card";

export default class OP03_113_551 extends Card {
    public static id: string = "OP03_113_551";
    
    public static _name: string = "Charlotte Perospero";

    public effect: string = "[On K.O.] Look at the top 3 cards of your deck, reveal 1 {Big Mom Pirates} type card and add it to your hand. Return the rest to the bottom of your deck in any order.\r\n[Trigger] You may discard 1 card from your hand: Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-113_c9f7ca_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Big Mom Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_113_551.id;
    }
    
    public getType() : CardType {
        return OP03_113_551.type as CardType;
    }
    
    public getImage() {
        return OP03_113_551.image;
    }
    
    public getName() {
        return OP03_113_551._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_113_551.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_113_551.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_113_551.archetypes;
    }
    
    public getPower(): number {
        return OP03_113_551.power;
    }

    public getCounter(): number {
        return OP03_113_551.counter;
    }

    public getLife(): number {
        return OP03_113_551.life;
    }
}
