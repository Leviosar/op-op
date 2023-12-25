
import Card, { CardType } from "../entities/Card";

export default class ST04_010_570 extends Card {
    public static id: string = "ST04_010_570";
    
    public static _name: string = "Who's who";

    public effect: string = "[On Play] [Don!! -1] K.O. up to one of your opponent's cost 3 or lower Characters.\r\n\r\n[Trigger] You may play this card.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-010_761c9b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_010_570.id;
    }
    
    public getType() : CardType {
        return ST04_010_570.type as CardType;
    }
    
    public getImage() {
        return ST04_010_570.image;
    }
    
    public getName() {
        return ST04_010_570._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_010_570.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_010_570.keywords;
    }
    
    public getPower(): number {
        return ST04_010_570.power;
    }

    public getCounter(): number {
        return ST04_010_570.counter;
    }

    public getLife(): number {
        return ST04_010_570.life;
    }
}
