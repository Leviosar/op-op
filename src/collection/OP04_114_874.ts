
import Card, { CardType } from "../entities/Card";

export default class OP04_114_874 extends Card {
    public static id: string = "OP04_114_874";
    
    public static _name: string = "Randolph";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-114_eb9869_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_114_874.id;
    }
    
    public getType() : CardType {
        return OP04_114_874.type as CardType;
    }
    
    public getImage() {
        return OP04_114_874.image;
    }
    
    public getName() {
        return OP04_114_874._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_114_874.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_114_874.keywords;
    }
    
    public getPower(): number {
        return OP04_114_874.power;
    }

    public getCounter(): number {
        return OP04_114_874.counter;
    }

    public getLife(): number {
        return OP04_114_874.life;
    }
}
