
import Card, { CardType } from "../entities/Card";

export default class OP02_065_308 extends Card {
    public static id: string = "OP02_065_308";
    
    public static _name: string = "Mr. 3 (Galdino)";

    public effect: string = "<Blocker>\r\n[End of Your Turn] You may trash 1 card from your hand: Put this Character to active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-065_2233b8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Impel Down","Former Baroque Works"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_065_308.id;
    }
    
    public getType() : CardType {
        return OP02_065_308.type as CardType;
    }
    
    public getImage() {
        return OP02_065_308.image;
    }
    
    public getName() {
        return OP02_065_308._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_065_308.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_065_308.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_065_308.archetypes;
    }
    
    public getPower(): number {
        return OP02_065_308.power;
    }

    public getCounter(): number {
        return OP02_065_308.counter;
    }

    public getLife(): number {
        return OP02_065_308.life;
    }
}
