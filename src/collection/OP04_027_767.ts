
import Card, { CardType } from "../entities/Card";

export default class OP04_027_767 extends Card {
    public static id: string = "OP04_027_767";
    
    public static _name: string = "Daddy Masterson";

    public effect: string = "[DONx1] [End of Your Turn] Set this character as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-027_1108d3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_027_767.id;
    }
    
    public getType() : CardType {
        return OP04_027_767.type as CardType;
    }
    
    public getImage() {
        return OP04_027_767.image;
    }
    
    public getName() {
        return OP04_027_767._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_027_767.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_027_767.keywords;
    }
    
    public getPower(): number {
        return OP04_027_767.power;
    }

    public getCounter(): number {
        return OP04_027_767.counter;
    }

    public getLife(): number {
        return OP04_027_767.life;
    }
}
