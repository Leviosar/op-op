
import Card, { CardType } from "../entities/Card";

export default class ST05_009_252 extends Card {
    public static id: string = "ST05_009_252";
    
    public static _name: string = "Scarlet";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-009_d098fb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_009_252.id;
    }
    
    public getType() : CardType {
        return ST05_009_252.type as CardType;
    }
    
    public getImage() {
        return ST05_009_252.image;
    }
    
    public getName() {
        return ST05_009_252._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_009_252.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_009_252.keywords;
    }
    
    public getPower(): number {
        return ST05_009_252.power;
    }

    public getCounter(): number {
        return ST05_009_252.counter;
    }

    public getLife(): number {
        return ST05_009_252.life;
    }
}
