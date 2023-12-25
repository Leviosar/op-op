
import Card, { CardType } from "../entities/Card";

export default class P_019_275 extends Card {
    public static id: string = "P_019_275";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When attacking] K.O. up to 1 of your opponent's Characters with 3000 or less Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-019_1e4916_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_019_275.id;
    }
    
    public getType() : CardType {
        return P_019_275.type as CardType;
    }
    
    public getImage() {
        return P_019_275.image;
    }
    
    public getName() {
        return P_019_275._name;
    }
    
    public getCost(): number {
        return parseInt(P_019_275.cost);
    }
    
    public getKeywords(): string[] {
        return P_019_275.keywords;
    }
    
    public getPower(): number {
        return P_019_275.power;
    }

    public getCounter(): number {
        return P_019_275.counter;
    }

    public getLife(): number {
        return P_019_275.life;
    }
}
