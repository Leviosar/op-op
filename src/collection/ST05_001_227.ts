
import Card, { CardType } from "../entities/Card";

export default class ST05_001_227 extends Card {
    public static id: string = "ST05_001_227";
    
    public static _name: string = "Shanks";

    public effect: string = "[Activate: Main] [Once per turn] DON!! -3: Your <FILM> type Characters gain +2000 Power during this turn.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-001_fc876b_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = ["FILM"];
    
    public static archetypes: string[] = ["FILM","Four Emperors","Red Haired Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST05_001_227.id;
    }
    
    public getType() : CardType {
        return ST05_001_227.type as CardType;
    }
    
    public getImage() {
        return ST05_001_227.image;
    }
    
    public getName() {
        return ST05_001_227._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_001_227.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_001_227.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST05_001_227.archetypes;
    }
    
    public getPower(): number {
        return ST05_001_227.power;
    }

    public getCounter(): number {
        return ST05_001_227.counter;
    }

    public getLife(): number {
        return ST05_001_227.life;
    }
}
