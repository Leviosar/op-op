
import Card, { CardType } from "../entities/Card";

export default class P_017_273 extends Card {
    public static id: string = "P_017_273";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] Up to 1 of your opponent's Characters lose -2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-017_c8589d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return P_017_273.id;
    }
    
    public getType() : CardType {
        return P_017_273.type as CardType;
    }
    
    public getImage() {
        return P_017_273.image;
    }
    
    public getName() {
        return P_017_273._name;
    }
    
    public getCost(): number {
        return parseInt(P_017_273.cost);
    }
    
    public getKeywords(): string[] {
        return P_017_273.keywords;
    }
}
