
import Card, { CardType } from "../entities/Card";

export default class OP02_011_325 extends Card {
    public static id: string = "OP02_011_325";
    
    public static _name: string = "Vista";

    public effect: string = "[On Play] K.O up to one of your opponent's Characters with 3000 power or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-011_db264a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_011_325.id;
    }
    
    public getType() : CardType {
        return OP02_011_325.type as CardType;
    }
    
    public getImage() {
        return OP02_011_325.image;
    }
    
    public getName() {
        return OP02_011_325._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_011_325.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_011_325.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_011_325.archetypes;
    }
    
    public getPower(): number {
        return OP02_011_325.power;
    }

    public getCounter(): number {
        return OP02_011_325.counter;
    }

    public getLife(): number {
        return OP02_011_325.life;
    }
}
