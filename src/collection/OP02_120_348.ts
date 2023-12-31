
import Card, { CardType } from "../entities/Card";

export default class OP02_120_348 extends Card {
    public static id: string = "OP02_120_348";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] DON!! -2 : Your Leader and all your Characters gain +1000 Power until the start of your next turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-120_e057cb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM"];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_120_348.id;
    }
    
    public getType() : CardType {
        return OP02_120_348.type as CardType;
    }
    
    public getImage() {
        return OP02_120_348.image;
    }
    
    public getName() {
        return OP02_120_348._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_120_348.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_120_348.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_120_348.archetypes;
    }
    
    public getPower(): number {
        return OP02_120_348.power;
    }

    public getCounter(): number {
        return OP02_120_348.counter;
    }

    public getLife(): number {
        return OP02_120_348.life;
    }
}
