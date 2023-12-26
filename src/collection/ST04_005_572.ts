
import Card, { CardType } from "../entities/Card";

export default class ST04_005_572 extends Card {
    public static id: string = "ST04_005_572";
    
    public static _name: string = "Queen";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card, you can change the attack target to this card.)\r\n[On Play] DON!! -1 (Return the specified amount of DON!! from your field to your DON!! deck.): Draw 2 cards, then trash 1 card from your hand.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-005_3dda93_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_005_572.id;
    }
    
    public getType() : CardType {
        return ST04_005_572.type as CardType;
    }
    
    public getImage() {
        return ST04_005_572.image;
    }
    
    public getName() {
        return ST04_005_572._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_005_572.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_005_572.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_005_572.archetypes;
    }
    
    public getPower(): number {
        return ST04_005_572.power;
    }

    public getCounter(): number {
        return ST04_005_572.counter;
    }

    public getLife(): number {
        return ST04_005_572.life;
    }
}
