
import Card, { CardType } from "../entities/Card";

export default class P_033_542 extends Card {
    public static id: string = "P_033_542";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Activate: Main] You may return this Character to the bottom of its owner's deck: Draw 1 card.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-033_83c4e7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_033_542.id;
    }
    
    public getType() : CardType {
        return P_033_542.type as CardType;
    }
    
    public getImage() {
        return P_033_542.image;
    }
    
    public getName() {
        return P_033_542._name;
    }
    
    public getCost(): number {
        return parseInt(P_033_542.cost);
    }
    
    public getKeywords(): string[] {
        return P_033_542.keywords;
    }
    
    public getPower(): number {
        return P_033_542.power;
    }

    public getCounter(): number {
        return P_033_542.counter;
    }

    public getLife(): number {
        return P_033_542.life;
    }
}
