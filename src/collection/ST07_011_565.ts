
import Card, { CardType } from "../entities/Card";

export default class ST07_011_565 extends Card {
    public static id: string = "ST07_011_565";
    
    public static _name: string = "Zeus";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain <Banish> during this turn.\r\n[Trigger] Play this card";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-011_a96efa_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Banish"];
    
    public getId() {
        return ST07_011_565.id;
    }
    
    public getType() : CardType {
        return ST07_011_565.type as CardType;
    }
    
    public getImage() {
        return ST07_011_565.image;
    }
    
    public getName() {
        return ST07_011_565._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_011_565.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_011_565.keywords;
    }
}
