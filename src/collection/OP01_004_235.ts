
import Card, { CardType } from "../entities/Card";

export default class OP01_004_235 extends Card {
    public static id: string = "OP01_004_235";
    
    public static _name: string = "Usopp";

    public effect: string = "[DON!!x1] [Your Turn] [Once Per Turn] After you opponent activates an Event, draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-004_6d875c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_004_235.id;
    }
    
    public getType() : CardType {
        return OP01_004_235.type as CardType;
    }
    
    public getImage() {
        return OP01_004_235.image;
    }
    
    public getName() {
        return OP01_004_235._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_004_235.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_004_235.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_004_235.archetypes;
    }
    
    public getPower(): number {
        return OP01_004_235.power;
    }

    public getCounter(): number {
        return OP01_004_235.counter;
    }

    public getLife(): number {
        return OP01_004_235.life;
    }
}
