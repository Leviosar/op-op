
import Card, { CardType } from "../entities/Card";

export default class OP03_046_651 extends Card {
    public static id: string = "OP03_046_651";
    
    public static _name: string = "Carne";

    public effect: string = "<Blocker>\r\n[Opponent's Turn] If your deck has 20 or less cards, this Character gains +3000 Power.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-046_10a6bb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP03_046_651.id;
    }
    
    public getType() : CardType {
        return OP03_046_651.type as CardType;
    }
    
    public getImage() {
        return OP03_046_651.image;
    }
    
    public getName() {
        return OP03_046_651._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_046_651.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_046_651.keywords;
    }
}
