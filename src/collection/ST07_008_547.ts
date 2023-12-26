
import Card, { CardType } from "../entities/Card";

export default class ST07_008_547 extends Card {
    public static id: string = "ST07_008_547";
    
    public static _name: string = "Charlotte Pudding";

    public effect: string = "[On Play] Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-008_148d82_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_008_547.id;
    }
    
    public getType() : CardType {
        return ST07_008_547.type as CardType;
    }
    
    public getImage() {
        return ST07_008_547.image;
    }
    
    public getName() {
        return ST07_008_547._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_008_547.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_008_547.keywords;
    }
    
    public getPower(): number {
        return ST07_008_547.power;
    }

    public getCounter(): number {
        return ST07_008_547.counter;
    }

    public getLife(): number {
        return ST07_008_547.life;
    }
}
