
import Card, { CardType } from "../entities/Card";

export default class ST03_010_106 extends Card {
    public static id: string = "ST03_010_106";
    
    public static _name: string = "Bartholomew Kuma";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-010_66138d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_010_106.id;
    }
    
    public getType() : CardType {
        return ST03_010_106.type as CardType;
    }
    
    public getImage() {
        return ST03_010_106.image;
    }
    
    public getName() {
        return ST03_010_106._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_010_106.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_010_106.keywords;
    }
    
    public getPower(): number {
        return ST03_010_106.power;
    }

    public getCounter(): number {
        return ST03_010_106.counter;
    }

    public getLife(): number {
        return ST03_010_106.life;
    }
}
