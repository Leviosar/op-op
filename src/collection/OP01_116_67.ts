
import Card, { CardType } from "../entities/Card";

export default class OP01_116_67 extends Card {
    public static id: string = "OP01_116_67";
    
    public static _name: string = "Artificial Devil Fruit SM";

    public effect: string = "[Main] Look at the top 5 cards of your deck and choose 1 {SMILE} type Character card that costs 3 or less from them and play it. Place the remaining cards at the bottom of the deck in any order.\r\n[Trigger] Activate this card's [Main] effect";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-116_44fee3_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_116_67.id;
    }
    
    public getType() : CardType {
        return OP01_116_67.type as CardType;
    }
    
    public getImage() {
        return OP01_116_67.image;
    }
    
    public getName() {
        return OP01_116_67._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_116_67.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_116_67.keywords;
    }
}
