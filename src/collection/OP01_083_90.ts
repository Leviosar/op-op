
import Card, { CardType } from "../entities/Card";

export default class OP01_083_90 extends Card {
    public static id: string = "OP01_083_90";
    
    public static _name: string = "Mr. 1 (Daz Bones)";

    public effect: string = "[DON!! x1] [During Your Turn] If your Leader is {Baroque Works} type, for every 2 Event cards in your Trash, this Character gains +1000 Power. ";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-083_305f7c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_083_90.id;
    }
    
    public getType() : CardType {
        return OP01_083_90.type as CardType;
    }
    
    public getImage() {
        return OP01_083_90.image;
    }
    
    public getName() {
        return OP01_083_90._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_083_90.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_083_90.keywords;
    }
    
    public getPower(): number {
        return OP01_083_90.power;
    }

    public getCounter(): number {
        return OP01_083_90.counter;
    }

    public getLife(): number {
        return OP01_083_90.life;
    }
}
