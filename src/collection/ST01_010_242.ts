
import Card, { CardType } from "../entities/Card";

export default class ST01_010_242 extends Card {
    public static id: string = "ST01_010_242";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-010_c7e0bb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST01_010_242.id;
    }
    
    public getType() : CardType {
        return ST01_010_242.type as CardType;
    }
    
    public getImage() {
        return ST01_010_242.image;
    }
    
    public getName() {
        return ST01_010_242._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_010_242.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_010_242.keywords;
    }
}
