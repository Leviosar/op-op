
import Card, { CardType } from "../entities/Card";

export default class ST03_006_86 extends Card {
    public static id: string = "ST03_006_86";
    
    public static _name: string = "Jinbe";

    public effect: string = "";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-006_984c88_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_006_86.id;
    }
    
    public getType() : CardType {
        return ST03_006_86.type as CardType;
    }
    
    public getImage() {
        return ST03_006_86.image;
    }
    
    public getName() {
        return ST03_006_86._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_006_86.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_006_86.keywords;
    }
    
    public getPower(): number {
        return ST03_006_86.power;
    }

    public getCounter(): number {
        return ST03_006_86.counter;
    }

    public getLife(): number {
        return ST03_006_86.life;
    }
}
