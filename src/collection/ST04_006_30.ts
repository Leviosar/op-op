
import Card, { CardType } from "../entities/Card";

export default class ST04_006_30 extends Card {
    public static id: string = "ST04_006_30";
    
    public static _name: string = "Sasaki";

    public effect: string = "[On Play] [Don!! -1] You can draw 1 card.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-006_ffcff6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST04_006_30.id;
    }
    
    public getType() : CardType {
        return ST04_006_30.type as CardType;
    }
    
    public getImage() {
        return ST04_006_30.image;
    }
    
    public getName() {
        return ST04_006_30._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_006_30.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_006_30.keywords;
    }
}
