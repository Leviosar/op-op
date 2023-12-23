
import Card, { CardType } from "../entities/Card";

export default class P_004_75 extends Card {
    public static id: string = "P_004_75";
    
    public static _name: string = "Crocodile";

    public effect: string = "[DON!! x1] This Character gains <Blocker>.(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-004_d0370c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return P_004_75.id;
    }
    
    public getType() : CardType {
        return P_004_75.type as CardType;
    }
    
    public getImage() {
        return P_004_75.image;
    }
    
    public getName() {
        return P_004_75._name;
    }
    
    public getCost(): number {
        return parseInt(P_004_75.cost);
    }
    
    public getKeywords(): string[] {
        return P_004_75.keywords;
    }
}
