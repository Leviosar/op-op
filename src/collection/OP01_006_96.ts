
import Card, { CardType } from "../entities/Card";

export default class OP01_006_96 extends Card {
    public static id: string = "OP01_006_96";
    
    public static _name: string = "Otama";

    public effect: string = "[On Play] Give 1 of your opponent's Characters -2000 Power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-006_a9903e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Wano Country"];
    
    public static power: number = 0;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_006_96.id;
    }
    
    public getType() : CardType {
        return OP01_006_96.type as CardType;
    }
    
    public getImage() {
        return OP01_006_96.image;
    }
    
    public getName() {
        return OP01_006_96._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_006_96.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_006_96.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_006_96.archetypes;
    }
    
    public getPower(): number {
        return OP01_006_96.power;
    }

    public getCounter(): number {
        return OP01_006_96.counter;
    }

    public getLife(): number {
        return OP01_006_96.life;
    }
}
