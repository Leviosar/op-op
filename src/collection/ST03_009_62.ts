
import Card, { CardType } from "../entities/Card";

export default class ST03_009_62 extends Card {
    public static id: string = "ST03_009_62";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[On Play] Return a cost 7 or lower Character to its owners hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-009_226b6c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_009_62.id;
    }
    
    public getType() : CardType {
        return ST03_009_62.type as CardType;
    }
    
    public getImage() {
        return ST03_009_62.image;
    }
    
    public getName() {
        return ST03_009_62._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_009_62.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_009_62.keywords;
    }
    
    public getPower(): number {
        return ST03_009_62.power;
    }

    public getCounter(): number {
        return ST03_009_62.counter;
    }

    public getLife(): number {
        return ST03_009_62.life;
    }
}
