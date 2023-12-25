
import Card, { CardType } from "../entities/Card";

export default class ST06_016_293 extends Card {
    public static id: string = "ST06_016_293";
    
    public static _name: string = "White Out";

    public effect: string = "[Counter] Give up to 1 of your Leader or Characters +2000 Power during this battle.\r\n[Trigger] Draw 1. Your Characters cannot be K.O.'d during this turn.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-016_49cf4e_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_016_293.id;
    }
    
    public getType() : CardType {
        return ST06_016_293.type as CardType;
    }
    
    public getImage() {
        return ST06_016_293.image;
    }
    
    public getName() {
        return ST06_016_293._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_016_293.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_016_293.keywords;
    }
    
    public getPower(): number {
        return ST06_016_293.power;
    }

    public getCounter(): number {
        return ST06_016_293.counter;
    }

    public getLife(): number {
        return ST06_016_293.life;
    }
}
