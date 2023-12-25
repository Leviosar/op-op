
import Card, { CardType } from "../entities/Card";

export default class ST01_015_786 extends Card {
    public static id: string = "ST01_015_786";
    
    public static _name: string = "Jet Pistol";

    public effect: string = "[Main] K.O. 1 of your opponent's Characters with a power of 6000 or less.\r\n[Trigger]: Activate this card's Main effect.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-015_a072c3_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_015_786.id;
    }
    
    public getType() : CardType {
        return ST01_015_786.type as CardType;
    }
    
    public getImage() {
        return ST01_015_786.image;
    }
    
    public getName() {
        return ST01_015_786._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_015_786.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_015_786.keywords;
    }
    
    public getPower(): number {
        return ST01_015_786.power;
    }

    public getCounter(): number {
        return ST01_015_786.counter;
    }

    public getLife(): number {
        return ST01_015_786.life;
    }
}
