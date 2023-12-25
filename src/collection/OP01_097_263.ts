
import Card, { CardType } from "../entities/Card";

export default class OP01_097_263 extends Card {
    public static id: string = "OP01_097_263";
    
    public static _name: string = "Queen";

    public effect: string = "[On Play] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains <Rush> (This card can attack on the turn in which it is played.) during this turn. Then, give up to 1 of your opponent's Characters -2000 power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-097_f20855_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Rush"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_097_263.id;
    }
    
    public getType() : CardType {
        return OP01_097_263.type as CardType;
    }
    
    public getImage() {
        return OP01_097_263.image;
    }
    
    public getName() {
        return OP01_097_263._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_097_263.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_097_263.keywords;
    }
    
    public getPower(): number {
        return OP01_097_263.power;
    }

    public getCounter(): number {
        return OP01_097_263.counter;
    }

    public getLife(): number {
        return OP01_097_263.life;
    }
}
