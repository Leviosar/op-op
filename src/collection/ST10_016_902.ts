
import Card, { CardType } from "../entities/Card";

export default class ST10_016_902 extends Card {
    public static id: string = "ST10_016_902";
    
    public static _name: string = "Gum-Gum Kong Gatling";

    public effect: string = "[Main] K.O. up to 1 of your opponent's Characters with 7000 power or less.\r\n[Trigger] Up to 1 of your Leader gains +1000 power until the end of your next turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-016_24d955_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST10_016_902.id;
    }
    
    public getType() : CardType {
        return ST10_016_902.type as CardType;
    }
    
    public getImage() {
        return ST10_016_902.image;
    }
    
    public getName() {
        return ST10_016_902._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_016_902.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_016_902.keywords;
    }
}
