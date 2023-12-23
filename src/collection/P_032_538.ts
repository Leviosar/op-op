
import Card, { CardType } from "../entities/Card";

export default class P_032_538 extends Card {
    public static id: string = "P_032_538";
    
    public static _name: string = "Sengoku";

    public effect: string = "[DON!!x1] [Your Turn] All of your opponent's Characters get -2 to their cost.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-032_a01bf2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return P_032_538.id;
    }
    
    public getType() : CardType {
        return P_032_538.type as CardType;
    }
    
    public getImage() {
        return P_032_538.image;
    }
    
    public getName() {
        return P_032_538._name;
    }
    
    public getCost(): number {
        return parseInt(P_032_538.cost);
    }
    
    public getKeywords(): string[] {
        return P_032_538.keywords;
    }
}
