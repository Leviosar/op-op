
import Card, { CardType } from "../entities/Card";

export default class P_026_347 extends Card {
    public static id: string = "P_026_347";
    
    public static _name: string = "Morgan";

    public effect: string = "[When Attacking] Give up to 1 of your opponent's Characters -3 to their cost this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-026_191c7b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_026_347.id;
    }
    
    public getType() : CardType {
        return P_026_347.type as CardType;
    }
    
    public getImage() {
        return P_026_347.image;
    }
    
    public getName() {
        return P_026_347._name;
    }
    
    public getCost(): number {
        return parseInt(P_026_347.cost);
    }
    
    public getKeywords(): string[] {
        return P_026_347.keywords;
    }
    
    public getPower(): number {
        return P_026_347.power;
    }

    public getCounter(): number {
        return P_026_347.counter;
    }

    public getLife(): number {
        return P_026_347.life;
    }
}
