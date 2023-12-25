
import Card, { CardType } from "../entities/Card";

export default class ST10_007_893 extends Card {
    public static id: string = "ST10_007_893";
    
    public static _name: string = "Killer";

    public effect: string = "[Your Turn] [Once Per Turn] When a DON!! card on your field is returned to your DON!! deck, K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-007_2b498c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_007_893.id;
    }
    
    public getType() : CardType {
        return ST10_007_893.type as CardType;
    }
    
    public getImage() {
        return ST10_007_893.image;
    }
    
    public getName() {
        return ST10_007_893._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_007_893.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_007_893.keywords;
    }
    
    public getPower(): number {
        return ST10_007_893.power;
    }

    public getCounter(): number {
        return ST10_007_893.counter;
    }

    public getLife(): number {
        return ST10_007_893.life;
    }
}
