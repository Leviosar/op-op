
import Card, { CardType } from "../entities/Card";

export default class ST04_014_40 extends Card {
    public static id: string = "ST04_014_40";
    
    public static _name: string = "All Star Disaster";

    public effect: string = "[Main] Draw 1 card. Then, add 1 DON!! card from your DON!! deck to your Cost Area active.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-014_7fca90_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_014_40.id;
    }
    
    public getType() : CardType {
        return ST04_014_40.type as CardType;
    }
    
    public getImage() {
        return ST04_014_40.image;
    }
    
    public getName() {
        return ST04_014_40._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_014_40.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_014_40.keywords;
    }
    
    public getPower(): number {
        return ST04_014_40.power;
    }

    public getCounter(): number {
        return ST04_014_40.counter;
    }

    public getLife(): number {
        return ST04_014_40.life;
    }
}
