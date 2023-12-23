
import Card, { CardType } from "../entities/Card";

export default class OP01_017_124 extends Card {
    public static id: string = "OP01_017_124";
    
    public static _name: string = "Nico Robin";

    public effect: string = "[DON!!x1] [When Attacking] K.O. one of your opponent's Characters with 3000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-017_3b2c2c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_017_124.id;
    }
    
    public getType() : CardType {
        return OP01_017_124.type as CardType;
    }
    
    public getImage() {
        return OP01_017_124.image;
    }
    
    public getName() {
        return OP01_017_124._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_017_124.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_017_124.keywords;
    }
}
