
import Card, { CardType } from "../entities/Card";

export default class ST08_014_738 extends Card {
    public static id: string = "ST08_014_738";
    
    public static _name: string = "Gum-Gum Bell";

    public effect: string = "[Main] You may add the top card of your life to your hand: Give up to 1 of your opponent's Characters -7 cost during this turn.\r\n\r\n[Trigger] Add up to 1 Black Character card with a cost of 2 or less from your trash to your hand.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-014_337945_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST08_014_738.id;
    }
    
    public getType() : CardType {
        return ST08_014_738.type as CardType;
    }
    
    public getImage() {
        return ST08_014_738.image;
    }
    
    public getName() {
        return ST08_014_738._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_014_738.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_014_738.keywords;
    }
}
