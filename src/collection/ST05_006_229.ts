
import Card, { CardType } from "../entities/Card";

export default class ST05_006_229 extends Card {
    public static id: string = "ST05_006_229";
    
    public static _name: string = "Gild Tesoro";

    public effect: string = "[When Attacking] DON!! -2: Draw 2 cards.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-006_99517e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_006_229.id;
    }
    
    public getType() : CardType {
        return ST05_006_229.type as CardType;
    }
    
    public getImage() {
        return ST05_006_229.image;
    }
    
    public getName() {
        return ST05_006_229._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_006_229.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_006_229.keywords;
    }
    
    public getPower(): number {
        return ST05_006_229.power;
    }

    public getCounter(): number {
        return ST05_006_229.counter;
    }

    public getLife(): number {
        return ST05_006_229.life;
    }
}
