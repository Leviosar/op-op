
import Card, { CardType } from "../entities/Card";

export default class OP04_092_856 extends Card {
    public static id: string = "OP04_092_856";
    
    public static _name: string = "Rebecca";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck; reveal up to 1 {Dressrosa} type card other than [Rebecca] and add it to your hand. Then, trash the rest.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-092_648627_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_092_856.id;
    }
    
    public getType() : CardType {
        return OP04_092_856.type as CardType;
    }
    
    public getImage() {
        return OP04_092_856.image;
    }
    
    public getName() {
        return OP04_092_856._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_092_856.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_092_856.keywords;
    }
    
    public getPower(): number {
        return OP04_092_856.power;
    }

    public getCounter(): number {
        return OP04_092_856.counter;
    }

    public getLife(): number {
        return OP04_092_856.life;
    }
}
