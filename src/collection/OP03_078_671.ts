
import Card, { CardType } from "../entities/Card";

export default class OP03_078_671 extends Card {
    public static id: string = "OP03_078_671";
    
    public static _name: string = "Issho";

    public effect: string = "[DON!! x1] [Your Turn] Give all of your opponent's Characters -3 cost.\r\n[On Play] If your opponent has 6 or more cards in their hand, your opponent must trash 2 cards from their hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-078_6e1ca3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_078_671.id;
    }
    
    public getType() : CardType {
        return OP03_078_671.type as CardType;
    }
    
    public getImage() {
        return OP03_078_671.image;
    }
    
    public getName() {
        return OP03_078_671._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_078_671.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_078_671.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_078_671.archetypes;
    }
    
    public getPower(): number {
        return OP03_078_671.power;
    }

    public getCounter(): number {
        return OP03_078_671.counter;
    }

    public getLife(): number {
        return OP03_078_671.life;
    }
}
