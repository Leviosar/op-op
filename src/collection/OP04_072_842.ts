
import Card, { CardType } from "../entities/Card";

export default class OP04_072_842 extends Card {
    public static id: string = "OP04_072_842";
    
    public static _name: string = "Mr. 5 (Gem)";

    public effect: string = "[On Your Opponent's Attack] [Once Per Turn] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.) You may rest this Character: K.O. up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-072_e5a0fc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_072_842.id;
    }
    
    public getType() : CardType {
        return OP04_072_842.type as CardType;
    }
    
    public getImage() {
        return OP04_072_842.image;
    }
    
    public getName() {
        return OP04_072_842._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_072_842.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_072_842.keywords;
    }
}
