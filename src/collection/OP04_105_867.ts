
import Card, { CardType } from "../entities/Card";

export default class OP04_105_867 extends Card {
    public static id: string = "OP04_105_867";
    
    public static _name: string = "Charlotte Amande";

    public effect: string = "[Activate: Main] [Once Per Turn] You may trash 1 card with a [Trigger] from your hand: Rest up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-105_04f9c2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_105_867.id;
    }
    
    public getType() : CardType {
        return OP04_105_867.type as CardType;
    }
    
    public getImage() {
        return OP04_105_867.image;
    }
    
    public getName() {
        return OP04_105_867._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_105_867.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_105_867.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_105_867.archetypes;
    }
    
    public getPower(): number {
        return OP04_105_867.power;
    }

    public getCounter(): number {
        return OP04_105_867.counter;
    }

    public getLife(): number {
        return OP04_105_867.life;
    }
}
