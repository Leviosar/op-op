
import Card, { CardType } from "../entities/Card";

export default class OP04_003_798 extends Card {
    public static id: string = "OP04_003_798";
    
    public static _name: string = "Usopp";

    public effect: string = "[On K.O.] K.O. up to 1 of your opponent's Characters with 5000 base power or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-003_0fb35d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_003_798.id;
    }
    
    public getType() : CardType {
        return OP04_003_798.type as CardType;
    }
    
    public getImage() {
        return OP04_003_798.image;
    }
    
    public getName() {
        return OP04_003_798._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_003_798.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_003_798.keywords;
    }
}
