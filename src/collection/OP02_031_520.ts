
import Card, { CardType } from "../entities/Card";

export default class OP02_031_520 extends Card {
    public static id: string = "OP02_031_520";
    
    public static _name: string = "Kozuki Toki";

    public effect: string = "If you control a [Kozuki Oden] Character, this Character gains <Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-031_be8e5f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Wano Country","Kozuki Family"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_031_520.id;
    }
    
    public getType() : CardType {
        return OP02_031_520.type as CardType;
    }
    
    public getImage() {
        return OP02_031_520.image;
    }
    
    public getName() {
        return OP02_031_520._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_031_520.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_031_520.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_031_520.archetypes;
    }
    
    public getPower(): number {
        return OP02_031_520.power;
    }

    public getCounter(): number {
        return OP02_031_520.counter;
    }

    public getLife(): number {
        return OP02_031_520.life;
    }
}
