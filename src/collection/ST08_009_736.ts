
import Card, { CardType } from "../entities/Card";

export default class ST08_009_736 extends Card {
    public static id: string = "ST08_009_736";
    
    public static _name: string = "Makino";

    public effect: string = "[On Play] If there is a Character with a Cost of 0 in play, draw 1 card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-009_f0b395_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_009_736.id;
    }
    
    public getType() : CardType {
        return ST08_009_736.type as CardType;
    }
    
    public getImage() {
        return ST08_009_736.image;
    }
    
    public getName() {
        return ST08_009_736._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_009_736.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_009_736.keywords;
    }
    
    public getPower(): number {
        return ST08_009_736.power;
    }

    public getCounter(): number {
        return ST08_009_736.counter;
    }

    public getLife(): number {
        return ST08_009_736.life;
    }
}
