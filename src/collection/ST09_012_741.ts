
import Card, { CardType } from "../entities/Card";

export default class ST09_012_741 extends Card {
    public static id: string = "ST09_012_741";
    
    public static _name: string = "Yamato";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains +2000 power until the start of your next turn.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-012_26d506_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST09_012_741.id;
    }
    
    public getType() : CardType {
        return ST09_012_741.type as CardType;
    }
    
    public getImage() {
        return ST09_012_741.image;
    }
    
    public getName() {
        return ST09_012_741._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_012_741.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_012_741.keywords;
    }
}
