
import Card, { CardType } from "../entities/Card";

export default class P_038_790 extends Card {
    public static id: string = "P_038_790";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] You may rest 1 of your Leaders: K.O. up to 1 of your opponent's Characters with a Cost of 1 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-038_5d8429_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_038_790.id;
    }
    
    public getType() : CardType {
        return P_038_790.type as CardType;
    }
    
    public getImage() {
        return P_038_790.image;
    }
    
    public getName() {
        return P_038_790._name;
    }
    
    public getCost(): number {
        return parseInt(P_038_790.cost);
    }
    
    public getKeywords(): string[] {
        return P_038_790.keywords;
    }
    
    public getPower(): number {
        return P_038_790.power;
    }

    public getCounter(): number {
        return P_038_790.counter;
    }

    public getLife(): number {
        return P_038_790.life;
    }
}
