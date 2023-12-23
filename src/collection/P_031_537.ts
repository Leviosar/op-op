
import Card, { CardType } from "../entities/Card";

export default class P_031_537 extends Card {
    public static id: string = "P_031_537";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] Add 1 DON!! card from your DON!! deck to your Cost Area rested.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-031_543cd1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return P_031_537.id;
    }
    
    public getType() : CardType {
        return P_031_537.type as CardType;
    }
    
    public getImage() {
        return P_031_537.image;
    }
    
    public getName() {
        return P_031_537._name;
    }
    
    public getCost(): number {
        return parseInt(P_031_537.cost);
    }
    
    public getKeywords(): string[] {
        return P_031_537.keywords;
    }
}
