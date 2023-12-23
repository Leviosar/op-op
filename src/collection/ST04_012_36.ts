
import Card, { CardType } from "../entities/Card";

export default class ST04_012_36 extends Card {
    public static id: string = "ST04_012_36";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-012_94a7e2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST04_012_36.id;
    }
    
    public getType() : CardType {
        return ST04_012_36.type as CardType;
    }
    
    public getImage() {
        return ST04_012_36.image;
    }
    
    public getName() {
        return ST04_012_36._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_012_36.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_012_36.keywords;
    }
}
