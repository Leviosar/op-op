
import Card, { CardType } from "../entities/Card";

export default class OP03_015_631 extends Card {
    public static id: string = "OP03_015_631";
    
    public static _name: string = "Lim";

    public effect: string = "<Blocker>\r\n[Opponent's Turn] When this card is K.O.ed, give -2000 power to up to 1 of your opponent's Leader or Characters.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-015_747f1c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP03_015_631.id;
    }
    
    public getType() : CardType {
        return OP03_015_631.type as CardType;
    }
    
    public getImage() {
        return OP03_015_631.image;
    }
    
    public getName() {
        return OP03_015_631._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_015_631.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_015_631.keywords;
    }
}
