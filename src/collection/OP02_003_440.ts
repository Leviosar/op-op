
import Card, { CardType } from "../entities/Card";

export default class OP02_003_440 extends Card {
    public static id: string = "OP02_003_440";
    
    public static _name: string = "Atmos";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-003_d15176_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_003_440.id;
    }
    
    public getType() : CardType {
        return OP02_003_440.type as CardType;
    }
    
    public getImage() {
        return OP02_003_440.image;
    }
    
    public getName() {
        return OP02_003_440._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_003_440.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_003_440.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_003_440.archetypes;
    }
    
    public getPower(): number {
        return OP02_003_440.power;
    }

    public getCounter(): number {
        return OP02_003_440.counter;
    }

    public getLife(): number {
        return OP02_003_440.life;
    }
}
