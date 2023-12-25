
import Card, { CardType } from "../entities/Card";

export default class P_001_236 extends Card {
    public static id: string = "P_001_236";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This card can attack on the turn in which it is played.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-001_27def7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Rush"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_001_236.id;
    }
    
    public getType() : CardType {
        return P_001_236.type as CardType;
    }
    
    public getImage() {
        return P_001_236.image;
    }
    
    public getName() {
        return P_001_236._name;
    }
    
    public getCost(): number {
        return parseInt(P_001_236.cost);
    }
    
    public getKeywords(): string[] {
        return P_001_236.keywords;
    }
    
    public getPower(): number {
        return P_001_236.power;
    }

    public getCounter(): number {
        return P_001_236.counter;
    }

    public getLife(): number {
        return P_001_236.life;
    }
}
