
import Card, { CardType } from "../entities/Card";

export default class ST04_009_33 extends Card {
    public static id: string = "ST04_009_33";
    
    public static _name: string = "Ginrummy";

    public effect: string = "[On Play] You may trash one card from your hand: Reveal one DON!! from your DON!! deck in Active.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-009_2cd3ff_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_009_33.id;
    }
    
    public getType() : CardType {
        return ST04_009_33.type as CardType;
    }
    
    public getImage() {
        return ST04_009_33.image;
    }
    
    public getName() {
        return ST04_009_33._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_009_33.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_009_33.keywords;
    }
    
    public getPower(): number {
        return ST04_009_33.power;
    }

    public getCounter(): number {
        return ST04_009_33.counter;
    }

    public getLife(): number {
        return ST04_009_33.life;
    }
}
