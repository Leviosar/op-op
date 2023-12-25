
import Card, { CardType } from "../entities/Card";

export default class OP01_075_202 extends Card {
    public static id: string = "OP01_075_202";
    
    public static _name: string = "Pacifista";

    public effect: string = "You can have as many of this card in your deck as the rules permit.\r\n<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-075_00694e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_075_202.id;
    }
    
    public getType() : CardType {
        return OP01_075_202.type as CardType;
    }
    
    public getImage() {
        return OP01_075_202.image;
    }
    
    public getName() {
        return OP01_075_202._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_075_202.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_075_202.keywords;
    }
    
    public getPower(): number {
        return OP01_075_202.power;
    }

    public getCounter(): number {
        return OP01_075_202.counter;
    }

    public getLife(): number {
        return OP01_075_202.life;
    }
}
