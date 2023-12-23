
import Card, { CardType } from "../entities/Card";

export default class P_022_277 extends Card {
    public static id: string = "P_022_277";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When attacking] K.O. up to 1 of your opponent's Characters with 3000 or less Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-022_736355_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return P_022_277.id;
    }
    
    public getType() : CardType {
        return P_022_277.type as CardType;
    }
    
    public getImage() {
        return P_022_277.image;
    }
    
    public getName() {
        return P_022_277._name;
    }
    
    public getCost(): number {
        return parseInt(P_022_277.cost);
    }
    
    public getKeywords(): string[] {
        return P_022_277.keywords;
    }
}
