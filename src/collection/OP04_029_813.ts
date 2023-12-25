
import Card, { CardType } from "../entities/Card";

export default class OP04_029_813 extends Card {
    public static id: string = "OP04_029_813";
    
    public static _name: string = "Dellinger";

    public effect: string = "[End of Your Turn] Set up to 1 of your DON!! cards as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-029_07fad1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_029_813.id;
    }
    
    public getType() : CardType {
        return OP04_029_813.type as CardType;
    }
    
    public getImage() {
        return OP04_029_813.image;
    }
    
    public getName() {
        return OP04_029_813._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_029_813.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_029_813.keywords;
    }
    
    public getPower(): number {
        return OP04_029_813.power;
    }

    public getCounter(): number {
        return OP04_029_813.counter;
    }

    public getLife(): number {
        return OP04_029_813.life;
    }
}
