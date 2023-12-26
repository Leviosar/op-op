
import Card, { CardType } from "../entities/Card";

export default class OP01_118_158 extends Card {
    public static id: string = "OP01_118_158";
    
    public static _name: string = "Ulti-Mortar";

    public effect: string = "[Counter] DON!! -2: Your Leader or 1 of your Character gains +2000 Power for this battle. Then draw 1 card. \r\n[Trigger] Add 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-118_31a57c_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_118_158.id;
    }
    
    public getType() : CardType {
        return OP01_118_158.type as CardType;
    }
    
    public getImage() {
        return OP01_118_158.image;
    }
    
    public getName() {
        return OP01_118_158._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_118_158.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_118_158.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_118_158.archetypes;
    }
    
    public getPower(): number {
        return OP01_118_158.power;
    }

    public getCounter(): number {
        return OP01_118_158.counter;
    }

    public getLife(): number {
        return OP01_118_158.life;
    }
}
