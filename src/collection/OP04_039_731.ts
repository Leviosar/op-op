
import Card, { CardType } from "../entities/Card";

export default class OP04_039_731 extends Card {
    public static id: string = "OP04_039_731";
    
    public static _name: string = "Rebecca";

    public effect: string = "This Leader cannot attack.\r\n[Activate: Main] (Once per Turn) (1) (You may rest the specified number of DON!! cards in your cost area): If you have 6 or less cards in your hand, look at 2 cards from the top of your deck; reveal up to 1 {Dressrosa} type card and add it to your hand. Then, trash the rest.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-039_45f4f5_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_039_731.id;
    }
    
    public getType() : CardType {
        return OP04_039_731.type as CardType;
    }
    
    public getImage() {
        return OP04_039_731.image;
    }
    
    public getName() {
        return OP04_039_731._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_039_731.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_039_731.keywords;
    }
}
