
import Card, { CardType } from "../entities/Card";

export default class P_015_271 extends Card {
    public static id: string = "P_015_271";
    
    public static _name: string = "Sunny-kun";

    public effect: string = "";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-015_c7045f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_015_271.id;
    }
    
    public getType() : CardType {
        return P_015_271.type as CardType;
    }
    
    public getImage() {
        return P_015_271.image;
    }
    
    public getName() {
        return P_015_271._name;
    }
    
    public getCost(): number {
        return parseInt(P_015_271.cost);
    }
    
    public getKeywords(): string[] {
        return P_015_271.keywords;
    }
    
    public getPower(): number {
        return P_015_271.power;
    }

    public getCounter(): number {
        return P_015_271.counter;
    }

    public getLife(): number {
        return P_015_271.life;
    }
}
