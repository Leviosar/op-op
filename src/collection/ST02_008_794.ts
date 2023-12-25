
import Card, { CardType } from "../entities/Card";

export default class ST02_008_794 extends Card {
    public static id: string = "ST02_008_794";
    
    public static _name: string = "Scratchmen Apoo";

    public effect: string = "[DON!!x1] [When attacking] Rest one of your opponent's DON!! \r\n[Counter+2000]";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-008_4a9c90_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_008_794.id;
    }
    
    public getType() : CardType {
        return ST02_008_794.type as CardType;
    }
    
    public getImage() {
        return ST02_008_794.image;
    }
    
    public getName() {
        return ST02_008_794._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_008_794.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_008_794.keywords;
    }
    
    public getPower(): number {
        return ST02_008_794.power;
    }

    public getCounter(): number {
        return ST02_008_794.counter;
    }

    public getLife(): number {
        return ST02_008_794.life;
    }
}
