
import Card, { CardType } from "../entities/Card";

export default class ST05_011_232 extends Card {
    public static id: string = "ST05_011_232";
    
    public static _name: string = "Douglass Bullet";

    public effect: string = "[Activate: Main] [Once per turn] DON!! -4: Rest up to 2 of your opponent's cost 6 or lower Characters. Then, this Character gains <Double Attack> during this turn.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-011_997af6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static power: number = 10000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_011_232.id;
    }
    
    public getType() : CardType {
        return ST05_011_232.type as CardType;
    }
    
    public getImage() {
        return ST05_011_232.image;
    }
    
    public getName() {
        return ST05_011_232._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_011_232.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_011_232.keywords;
    }
    
    public getPower(): number {
        return ST05_011_232.power;
    }

    public getCounter(): number {
        return ST05_011_232.counter;
    }

    public getLife(): number {
        return ST05_011_232.life;
    }
}
