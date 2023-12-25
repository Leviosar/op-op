
import Card, { CardType } from "../entities/Card";

export default class ST07_012_587 extends Card {
    public static id: string = "ST07_012_587";
    
    public static _name: string = "Prometheus";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain <Double Attack> during this turn.\r\n[Trigger] Play this card";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-012_2d711b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_012_587.id;
    }
    
    public getType() : CardType {
        return ST07_012_587.type as CardType;
    }
    
    public getImage() {
        return ST07_012_587.image;
    }
    
    public getName() {
        return ST07_012_587._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_012_587.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_012_587.keywords;
    }
    
    public getPower(): number {
        return ST07_012_587.power;
    }

    public getCounter(): number {
        return ST07_012_587.counter;
    }

    public getLife(): number {
        return ST07_012_587.life;
    }
}
