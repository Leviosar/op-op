
import Card, { CardType } from "../entities/Card";

export default class ST02_002_109 extends Card {
    public static id: string = "ST02_002_109";
    
    public static _name: string = "Capone \"Gang\" Bege";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-002_82252e_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_002_109.id;
    }
    
    public getType() : CardType {
        return ST02_002_109.type as CardType;
    }
    
    public getImage() {
        return ST02_002_109.image;
    }
    
    public getName() {
        return ST02_002_109._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_002_109.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_002_109.keywords;
    }
    
    public getPower(): number {
        return ST02_002_109.power;
    }

    public getCounter(): number {
        return ST02_002_109.counter;
    }

    public getLife(): number {
        return ST02_002_109.life;
    }
}
