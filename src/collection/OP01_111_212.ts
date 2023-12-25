
import Card, { CardType } from "../entities/Card";

export default class OP01_111_212 extends Card {
    public static id: string = "OP01_111_212";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On Block] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +1000 power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-111_d0bb9e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_111_212.id;
    }
    
    public getType() : CardType {
        return OP01_111_212.type as CardType;
    }
    
    public getImage() {
        return OP01_111_212.image;
    }
    
    public getName() {
        return OP01_111_212._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_111_212.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_111_212.keywords;
    }
    
    public getPower(): number {
        return OP01_111_212.power;
    }

    public getCounter(): number {
        return OP01_111_212.counter;
    }

    public getLife(): number {
        return OP01_111_212.life;
    }
}
