
import Card, { CardType } from "../entities/Card";

export default class P_008_224 extends Card {
    public static id: string = "P_008_224";
    
    public static _name: string = "Yamato";

    public effect: string = "[Activate: Main] You may rest this Character: Rest 1 of your opponent's cost 2 or lower Characters";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-008_d9dc4c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return P_008_224.id;
    }
    
    public getType() : CardType {
        return P_008_224.type as CardType;
    }
    
    public getImage() {
        return P_008_224.image;
    }
    
    public getName() {
        return P_008_224._name;
    }
    
    public getCost(): number {
        return parseInt(P_008_224.cost);
    }
    
    public getKeywords(): string[] {
        return P_008_224.keywords;
    }
}
