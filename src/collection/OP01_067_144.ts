
import Card, { CardType } from "../entities/Card";

export default class OP01_067_144 extends Card {
    public static id: string = "OP01_067_144";
    
    public static _name: string = "Crocodile";

    public effect: string = "[Banish] (When this card deals damage, the life card is trashed without activating [Trigger])\r\n[DON!!x1] Blue Event cards in your hand have Cost-1";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-067_732d0e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_067_144.id;
    }
    
    public getType() : CardType {
        return OP01_067_144.type as CardType;
    }
    
    public getImage() {
        return OP01_067_144.image;
    }
    
    public getName() {
        return OP01_067_144._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_067_144.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_067_144.keywords;
    }
    
    public getPower(): number {
        return OP01_067_144.power;
    }

    public getCounter(): number {
        return OP01_067_144.counter;
    }

    public getLife(): number {
        return OP01_067_144.life;
    }
}
