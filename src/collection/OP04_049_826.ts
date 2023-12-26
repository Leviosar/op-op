
import Card, { CardType } from "../entities/Card";

export default class OP04_049_826 extends Card {
    public static id: string = "OP04_049_826";
    
    public static _name: string = "Jack";

    public effect: string = "[On K.O.] Draw 1 card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-049_1f1d2c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_049_826.id;
    }
    
    public getType() : CardType {
        return OP04_049_826.type as CardType;
    }
    
    public getImage() {
        return OP04_049_826.image;
    }
    
    public getName() {
        return OP04_049_826._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_049_826.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_049_826.keywords;
    }
    
    public getPower(): number {
        return OP04_049_826.power;
    }

    public getCounter(): number {
        return OP04_049_826.counter;
    }

    public getLife(): number {
        return OP04_049_826.life;
    }
}
