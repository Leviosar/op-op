
import Card, { CardType } from "../entities/Card";

export default class ST08_002_722 extends Card {
    public static id: string = "ST08_002_722";
    
    public static _name: string = "Uta";

    public effect: string = "This character cannot be KO'ed by battling against a Leader.\r\n[Activate: Main] You may rest this card: Give up to 1 of your opponent's characters cost -2 during this turn.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-002_69e025_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST08_002_722.id;
    }
    
    public getType() : CardType {
        return ST08_002_722.type as CardType;
    }
    
    public getImage() {
        return ST08_002_722.image;
    }
    
    public getName() {
        return ST08_002_722._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_002_722.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_002_722.keywords;
    }
}
