
import Card, { CardType } from "../entities/Card";

export default class OP02_031_327 extends Card {
    public static id: string = "OP02_031_327";
    
    public static _name: string = "Kozuki Toki";

    public effect: string = "If you control a [Kozuki Oden] Character, this Character gains <Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-031_0c630e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Wano Country","Kozuki Family"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_031_327.id;
    }
    
    public getType() : CardType {
        return OP02_031_327.type as CardType;
    }
    
    public getImage() {
        return OP02_031_327.image;
    }
    
    public getName() {
        return OP02_031_327._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_031_327.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_031_327.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_031_327.archetypes;
    }
    
    public getPower(): number {
        return OP02_031_327.power;
    }

    public getCounter(): number {
        return OP02_031_327.counter;
    }

    public getLife(): number {
        return OP02_031_327.life;
    }
}
