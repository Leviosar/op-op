
import Card, { CardType } from "../entities/Card";

export default class P_034_548 extends Card {
    public static id: string = "P_034_548";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x1] [Your Turn] While your Life area has 2 or less cards, this Character gains +2000 power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-034_7ffef2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_034_548.id;
    }
    
    public getType() : CardType {
        return P_034_548.type as CardType;
    }
    
    public getImage() {
        return P_034_548.image;
    }
    
    public getName() {
        return P_034_548._name;
    }
    
    public getCost(): number {
        return parseInt(P_034_548.cost);
    }
    
    public getKeywords(): string[] {
        return P_034_548.keywords;
    }
    
    public getPower(): number {
        return P_034_548.power;
    }

    public getCounter(): number {
        return P_034_548.counter;
    }

    public getLife(): number {
        return P_034_548.life;
    }
}
