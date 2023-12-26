
import Card, { CardType } from "../entities/Card";

export default class ST01_008_247 extends Card {
    public static id: string = "ST01_008_247";
    
    public static _name: string = "Nico Robin";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-008_badd0c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_008_247.id;
    }
    
    public getType() : CardType {
        return ST01_008_247.type as CardType;
    }
    
    public getImage() {
        return ST01_008_247.image;
    }
    
    public getName() {
        return ST01_008_247._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_008_247.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_008_247.keywords;
    }
    
    public getPower(): number {
        return ST01_008_247.power;
    }

    public getCounter(): number {
        return ST01_008_247.counter;
    }

    public getLife(): number {
        return ST01_008_247.life;
    }
}
