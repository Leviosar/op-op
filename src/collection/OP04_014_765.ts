
import Card, { CardType } from "../entities/Card";

export default class OP04_014_765 extends Card {
    public static id: string = "OP04_014_765";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "<Banish>";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-014_e2e9c1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = ["Banish"];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_014_765.id;
    }
    
    public getType() : CardType {
        return OP04_014_765.type as CardType;
    }
    
    public getImage() {
        return OP04_014_765.image;
    }
    
    public getName() {
        return OP04_014_765._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_014_765.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_014_765.keywords;
    }
    
    public getPower(): number {
        return OP04_014_765.power;
    }

    public getCounter(): number {
        return OP04_014_765.counter;
    }

    public getLife(): number {
        return OP04_014_765.life;
    }
}
