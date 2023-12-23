
import Card, { CardType } from "../entities/Card";

export default class OP01_066_189 extends Card {
    public static id: string = "OP01_066_189";
    
    public static _name: string = "Arlong";

    public effect: string = "[DON!!x1] [Activate: Main] You may rest this Character: Pick 1 card from your opponent's hand and reveal it. If the revealed card is an Event card, place up to 1 of their Life cards on the bottom of the owner's deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-066_aeef5d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_066_189.id;
    }
    
    public getType() : CardType {
        return OP01_066_189.type as CardType;
    }
    
    public getImage() {
        return OP01_066_189.image;
    }
    
    public getName() {
        return OP01_066_189._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_066_189.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_066_189.keywords;
    }
}
