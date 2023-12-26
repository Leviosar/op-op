
import Card, { CardType } from "../entities/Card";

export default class OP04_062_836 extends Card {
    public static id: string = "OP04_062_836";
    
    public static _name: string = "Bananagator";

    public effect: string = "";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-062_2a82a1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_062_836.id;
    }
    
    public getType() : CardType {
        return OP04_062_836.type as CardType;
    }
    
    public getImage() {
        return OP04_062_836.image;
    }
    
    public getName() {
        return OP04_062_836._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_062_836.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_062_836.keywords;
    }
    
    public getPower(): number {
        return OP04_062_836.power;
    }

    public getCounter(): number {
        return OP04_062_836.counter;
    }

    public getLife(): number {
        return OP04_062_836.life;
    }
}
