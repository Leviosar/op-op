
import Card, { CardType } from "../entities/Card";

export default class ST07_006_593 extends Card {
    public static id: string = "ST07_006_593";
    
    public static _name: string = "Charlotte Flampe";

    public effect: string = "";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-006_017638_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_006_593.id;
    }
    
    public getType() : CardType {
        return ST07_006_593.type as CardType;
    }
    
    public getImage() {
        return ST07_006_593.image;
    }
    
    public getName() {
        return ST07_006_593._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_006_593.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_006_593.keywords;
    }
    
    public getPower(): number {
        return ST07_006_593.power;
    }

    public getCounter(): number {
        return ST07_006_593.counter;
    }

    public getLife(): number {
        return ST07_006_593.life;
    }
}
