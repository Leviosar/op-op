
import Card, { CardType } from "../entities/Card";

export default class P_001_58 extends Card {
    public static id: string = "P_001_58";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This Character can attack the turn it enters play.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-001_b30b49_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Rush"];
    
    public getId() {
        return P_001_58.id;
    }
    
    public getType() : CardType {
        return P_001_58.type as CardType;
    }
    
    public getImage() {
        return P_001_58.image;
    }
    
    public getName() {
        return P_001_58._name;
    }
    
    public getCost(): number {
        return parseInt(P_001_58.cost);
    }
    
    public getKeywords(): string[] {
        return P_001_58.keywords;
    }
}
