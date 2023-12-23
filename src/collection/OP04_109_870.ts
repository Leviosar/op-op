
import Card, { CardType } from "../entities/Card";

export default class OP04_109_870 extends Card {
    public static id: string = "OP04_109_870";
    
    public static _name: string = "Tonoyasu";

    public effect: string = "[Activate: Main] You may trash this Character: Up to 1 of your {Land of Wano} type Leader or Character cards gains +3000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-109_7ed71b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_109_870.id;
    }
    
    public getType() : CardType {
        return OP04_109_870.type as CardType;
    }
    
    public getImage() {
        return OP04_109_870.image;
    }
    
    public getName() {
        return OP04_109_870._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_109_870.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_109_870.keywords;
    }
}
