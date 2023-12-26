
import Card, { CardType } from "../entities/Card";

export default class OP03_074_670 extends Card {
    public static id: string = "OP03_074_670";
    
    public static _name: string = "Top Knot";

    public effect: string = "[Main] DON!! -1: Return up to 1 of your opponent's Characters with a cost of 4 or less to the bottom of its owner's deck.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-074_3c3023_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_074_670.id;
    }
    
    public getType() : CardType {
        return OP03_074_670.type as CardType;
    }
    
    public getImage() {
        return OP03_074_670.image;
    }
    
    public getName() {
        return OP03_074_670._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_074_670.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_074_670.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_074_670.archetypes;
    }
    
    public getPower(): number {
        return OP03_074_670.power;
    }

    public getCounter(): number {
        return OP03_074_670.counter;
    }

    public getLife(): number {
        return OP03_074_670.life;
    }
}
