
import Card, { CardType } from "../entities/Card";

export default class P_012_267 extends Card {
    public static id: string = "P_012_267";
    
    public static _name: string = "Jellyfish Pirates";

    public effect: string = "[Activate: Main] [Once per turn] (1) (You may rest the designated number for DON!! in your Cost Area): Up to 1 of your Characters without effects gain +2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-012_7cea29_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_012_267.id;
    }
    
    public getType() : CardType {
        return P_012_267.type as CardType;
    }
    
    public getImage() {
        return P_012_267.image;
    }
    
    public getName() {
        return P_012_267._name;
    }
    
    public getCost(): number {
        return parseInt(P_012_267.cost);
    }
    
    public getKeywords(): string[] {
        return P_012_267.keywords;
    }
    
    public getPower(): number {
        return P_012_267.power;
    }

    public getCounter(): number {
        return P_012_267.counter;
    }

    public getLife(): number {
        return P_012_267.life;
    }
}
