
import Card, { CardType } from "../entities/Card";

export default class OP01_031_171 extends Card {
    public static id: string = "OP01_031_171";
    
    public static _name: string = "Kozuki Oden";

    public effect: string = "[Activate: Main] [Once Per Turn] You can trash 1 {Wano Country} type card from your hand: Set up to 2 of your DON!! cards as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-031_bef0b8_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Wano Country","Kozuki Family"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP01_031_171.id;
    }
    
    public getType() : CardType {
        return OP01_031_171.type as CardType;
    }
    
    public getImage() {
        return OP01_031_171.image;
    }
    
    public getName() {
        return OP01_031_171._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_031_171.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_031_171.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_031_171.archetypes;
    }
    
    public getPower(): number {
        return OP01_031_171.power;
    }

    public getCounter(): number {
        return OP01_031_171.counter;
    }

    public getLife(): number {
        return OP01_031_171.life;
    }
}
