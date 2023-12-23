
import Card, { CardType } from "../entities/Card";

export default class OP03_004_622 extends Card {
    public static id: string = "OP03_004_622";
    
    public static _name: string = "Curiel";

    public effect: string = "This Character cannot attack the Leader on the turn in which it is played.\r\n[DON!! x1] This character gains <Rush>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-004_6db6bf_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Rush"];
    
    public getId() {
        return OP03_004_622.id;
    }
    
    public getType() : CardType {
        return OP03_004_622.type as CardType;
    }
    
    public getImage() {
        return OP03_004_622.image;
    }
    
    public getName() {
        return OP03_004_622._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_004_622.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_004_622.keywords;
    }
}
