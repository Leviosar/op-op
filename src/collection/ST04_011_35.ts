
import Card, { CardType } from "../entities/Card";

export default class ST04_011_35 extends Card {
    public static id: string = "ST04_011_35";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-011_57f570_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST04_011_35.id;
    }
    
    public getType() : CardType {
        return ST04_011_35.type as CardType;
    }
    
    public getImage() {
        return ST04_011_35.image;
    }
    
    public getName() {
        return ST04_011_35._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_011_35.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_011_35.keywords;
    }
}
