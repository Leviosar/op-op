
import Card, { CardType } from "../entities/Card";

export default class ST06_004_280 extends Card {
    public static id: string = "ST06_004_280";
    
    public static _name: string = "Smoker";

    public effect: string = "This character can not be K.O.'d by card effects.\r\n[DON!!x1] As long as there is a Character that costs 0 in play, this character gains <Double Attack> (This card deals 2 damage)";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-004_7e8b4c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST06_004_280.id;
    }
    
    public getType() : CardType {
        return ST06_004_280.type as CardType;
    }
    
    public getImage() {
        return ST06_004_280.image;
    }
    
    public getName() {
        return ST06_004_280._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_004_280.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_004_280.keywords;
    }
    
    public getPower(): number {
        return ST06_004_280.power;
    }

    public getCounter(): number {
        return ST06_004_280.counter;
    }

    public getLife(): number {
        return ST06_004_280.life;
    }
}
