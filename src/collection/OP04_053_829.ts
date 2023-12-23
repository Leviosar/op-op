
import Card, { CardType } from "../entities/Card";

export default class OP04_053_829 extends Card {
    public static id: string = "OP04_053_829";
    
    public static _name: string = "Page One";

    public effect: string = "[DON!! x1] [Once Per Turn] When you activate an Event, draw 1 card. Then, place 1 card from your hand at the bottom of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-053_a443e6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_053_829.id;
    }
    
    public getType() : CardType {
        return OP04_053_829.type as CardType;
    }
    
    public getImage() {
        return OP04_053_829.image;
    }
    
    public getName() {
        return OP04_053_829._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_053_829.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_053_829.keywords;
    }
}
