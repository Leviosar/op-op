
import Card, { CardType } from "../entities/Card";

export default class ST05_004_138 extends Card {
    public static id: string = "ST05_004_138";
    
    public static _name: string = "Uta";

    public effect: string = "<Blocker>\r\n[On Block] DON!!-1: Rest up to 1 of your opponent's Characters that costs 5 or less.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-004_59ebac_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["FILM"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_004_138.id;
    }
    
    public getType() : CardType {
        return ST05_004_138.type as CardType;
    }
    
    public getImage() {
        return ST05_004_138.image;
    }
    
    public getName() {
        return ST05_004_138._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_004_138.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_004_138.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST05_004_138.archetypes;
    }
    
    public getPower(): number {
        return ST05_004_138.power;
    }

    public getCounter(): number {
        return ST05_004_138.counter;
    }

    public getLife(): number {
        return ST05_004_138.life;
    }
}
