
import Card, { CardType } from "../entities/Card";

export default class OP01_047_47 extends Card {
    public static id: string = "OP01_047_47";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "<Blocker>\r\n[On Play] You may return one of your Characters to your hand: Play 1 Cost 3 or lower Character Card from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-047_616aca_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Supernovas","Heart Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_047_47.id;
    }
    
    public getType() : CardType {
        return OP01_047_47.type as CardType;
    }
    
    public getImage() {
        return OP01_047_47.image;
    }
    
    public getName() {
        return OP01_047_47._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_047_47.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_047_47.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_047_47.archetypes;
    }
    
    public getPower(): number {
        return OP01_047_47.power;
    }

    public getCounter(): number {
        return OP01_047_47.counter;
    }

    public getLife(): number {
        return OP01_047_47.life;
    }
}
