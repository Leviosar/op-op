
import Card, { CardType } from "../entities/Card";

export default class ST04_013_37 extends Card {
    public static id: string = "ST04_013_37";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-013_2e656f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST04_013_37.id;
    }
    
    public getType() : CardType {
        return ST04_013_37.type as CardType;
    }
    
    public getImage() {
        return ST04_013_37.image;
    }
    
    public getName() {
        return ST04_013_37._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_013_37.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_013_37.keywords;
    }
}
