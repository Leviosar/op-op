
import Card, { CardType } from "../entities/Card";

export default class OP04_019_759 extends Card {
    public static id: string = "OP04_019_759";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[End of Your Turn] Set up to 2 of your DON!! cards as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-019_3ccdb7_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_019_759.id;
    }
    
    public getType() : CardType {
        return OP04_019_759.type as CardType;
    }
    
    public getImage() {
        return OP04_019_759.image;
    }
    
    public getName() {
        return OP04_019_759._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_019_759.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_019_759.keywords;
    }
}
