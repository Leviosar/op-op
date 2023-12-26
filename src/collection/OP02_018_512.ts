
import Card, { CardType } from "../entities/Card";

export default class OP02_018_512 extends Card {
    public static id: string = "OP02_018_512";
    
    public static _name: string = "Marco";

    public effect: string = "<Blocker>\r\n[On K.O.] You may trash 1 card from hand with {Whitebeard Pirates} in one of its types: If you have 2 or less Life, play this Character card from your Trash as rested.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-018_d30823_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_018_512.id;
    }
    
    public getType() : CardType {
        return OP02_018_512.type as CardType;
    }
    
    public getImage() {
        return OP02_018_512.image;
    }
    
    public getName() {
        return OP02_018_512._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_018_512.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_018_512.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_018_512.archetypes;
    }
    
    public getPower(): number {
        return OP02_018_512.power;
    }

    public getCounter(): number {
        return OP02_018_512.counter;
    }

    public getLife(): number {
        return OP02_018_512.life;
    }
}
