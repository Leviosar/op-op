
import Card, { CardType } from "../entities/Card";

export default class OP04_025_811 extends Card {
    public static id: string = "OP04_025_811";
    
    public static _name: string = "Giolla";

    public effect: string = "[On Your Opponent's Attack] ➁ (You may rest the specified number of DON!! cards in your cost area.): Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-025_8b4eb9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_025_811.id;
    }
    
    public getType() : CardType {
        return OP04_025_811.type as CardType;
    }
    
    public getImage() {
        return OP04_025_811.image;
    }
    
    public getName() {
        return OP04_025_811._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_025_811.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_025_811.keywords;
    }
}
