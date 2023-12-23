
import Card, { CardType } from "../entities/Card";

export default class ST07_007_544 extends Card {
    public static id: string = "ST07_007_544";
    
    public static _name: string = "Charlotte Brulee";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-007_b1d372_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST07_007_544.id;
    }
    
    public getType() : CardType {
        return ST07_007_544.type as CardType;
    }
    
    public getImage() {
        return ST07_007_544.image;
    }
    
    public getName() {
        return ST07_007_544._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_007_544.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_007_544.keywords;
    }
}
