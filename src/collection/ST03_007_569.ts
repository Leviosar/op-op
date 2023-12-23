
import Card, { CardType } from "../entities/Card";

export default class ST03_007_569 extends Card {
    public static id: string = "ST03_007_569";
    
    public static _name: string = "Sentomaru";

    public effect: string = "[DON!! x1] [Activate Main] [Once Per Turn] (2) (Rest the designated amount of DON!! cards in your Cost Area.): Play up to 1 cost 4 or lower [Pacifista] from your deck. Then, shuffle your deck.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-007_40d181_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST03_007_569.id;
    }
    
    public getType() : CardType {
        return ST03_007_569.type as CardType;
    }
    
    public getImage() {
        return ST03_007_569.image;
    }
    
    public getName() {
        return ST03_007_569._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_007_569.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_007_569.keywords;
    }
}
