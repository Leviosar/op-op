
import Card, { CardType } from "../entities/Card";

export default class P_016_272 extends Card {
    public static id: string = "P_016_272";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] Your Leader or up to 1 of your Characters gains +1000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-016_f4f238_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 10000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_016_272.id;
    }
    
    public getType() : CardType {
        return P_016_272.type as CardType;
    }
    
    public getImage() {
        return P_016_272.image;
    }
    
    public getName() {
        return P_016_272._name;
    }
    
    public getCost(): number {
        return parseInt(P_016_272.cost);
    }
    
    public getKeywords(): string[] {
        return P_016_272.keywords;
    }
    
    public getPower(): number {
        return P_016_272.power;
    }

    public getCounter(): number {
        return P_016_272.counter;
    }

    public getLife(): number {
        return P_016_272.life;
    }
}
