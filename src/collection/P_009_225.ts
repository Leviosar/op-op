
import Card, { CardType } from "../entities/Card";

export default class P_009_225 extends Card {
    public static id: string = "P_009_225";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] If your opponent has 6 or more cards in their hand, add one of your opponent's Life cards to their hand.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-009_03f16e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_009_225.id;
    }
    
    public getType() : CardType {
        return P_009_225.type as CardType;
    }
    
    public getImage() {
        return P_009_225.image;
    }
    
    public getName() {
        return P_009_225._name;
    }
    
    public getCost(): number {
        return parseInt(P_009_225.cost);
    }
    
    public getKeywords(): string[] {
        return P_009_225.keywords;
    }
    
    public getPower(): number {
        return P_009_225.power;
    }

    public getCounter(): number {
        return P_009_225.counter;
    }

    public getLife(): number {
        return P_009_225.life;
    }
}
