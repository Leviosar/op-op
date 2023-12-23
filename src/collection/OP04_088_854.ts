
import Card, { CardType } from "../entities/Card";

export default class OP04_088_854 extends Card {
    public static id: string = "OP04_088_854";
    
    public static _name: string = "Hajrudin";

    public effect: string = "[Activate: Main] You may rest your 1 Leader: Give up to 1 of your opponent's Characters −4 cost during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-088_ae84cb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_088_854.id;
    }
    
    public getType() : CardType {
        return OP04_088_854.type as CardType;
    }
    
    public getImage() {
        return OP04_088_854.image;
    }
    
    public getName() {
        return OP04_088_854._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_088_854.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_088_854.keywords;
    }
}
