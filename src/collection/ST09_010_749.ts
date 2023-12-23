
import Card, { CardType } from "../entities/Card";

export default class ST09_010_749 extends Card {
    public static id: string = "ST09_010_749";
    
    public static _name: string = "Portgas D. Ace";

    public effect: string = "[Once Per Turn] If this Character would be KO'ed, you can trash 1 card from the top or bottom of your Life Area instead.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-010_c8c297_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST09_010_749.id;
    }
    
    public getType() : CardType {
        return ST09_010_749.type as CardType;
    }
    
    public getImage() {
        return ST09_010_749.image;
    }
    
    public getName() {
        return ST09_010_749._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_010_749.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_010_749.keywords;
    }
}
