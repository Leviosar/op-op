
import Card, { CardType } from "../entities/Card";

export default class ST07_013_567 extends Card {
    public static id: string = "ST07_013_567";
    
    public static _name: string = "Prometheus";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain <Double Attack> during this turn.\r\n[Trigger] Play this card";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-013_696b91_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static archetype: string[] = ["Big Mom Pirates","Homies"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_013_567.id;
    }
    
    public getType() : CardType {
        return ST07_013_567.type as CardType;
    }
    
    public getImage() {
        return ST07_013_567.image;
    }
    
    public getName() {
        return ST07_013_567._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_013_567.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_013_567.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST07_013_567.archetypes;
    }
    
    public getPower(): number {
        return ST07_013_567.power;
    }

    public getCounter(): number {
        return ST07_013_567.counter;
    }

    public getLife(): number {
        return ST07_013_567.life;
    }
}
