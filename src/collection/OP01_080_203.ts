
import Card, { CardType } from "../entities/Card";

export default class OP01_080_203 extends Card {
    public static id: string = "OP01_080_203";
    
    public static _name: string = "Miss Doublefinger(Zala)";

    public effect: string = "[On K.O.] Draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-080_29ee15_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_080_203.id;
    }
    
    public getType() : CardType {
        return OP01_080_203.type as CardType;
    }
    
    public getImage() {
        return OP01_080_203.image;
    }
    
    public getName() {
        return OP01_080_203._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_080_203.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_080_203.keywords;
    }
}
