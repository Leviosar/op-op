
import Card, { CardType } from "../entities/Card";

export default class OP04_118_808 extends Card {
    public static id: string = "OP04_118_808";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "All of your Red Characters with a cost of 3 or more other than this Character gain <Rush>";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-118_20f7e6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Rush"];
    
    public getId() {
        return OP04_118_808.id;
    }
    
    public getType() : CardType {
        return OP04_118_808.type as CardType;
    }
    
    public getImage() {
        return OP04_118_808.image;
    }
    
    public getName() {
        return OP04_118_808._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_118_808.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_118_808.keywords;
    }
}
