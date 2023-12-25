
import Card, { CardType } from "../entities/Card";

export default class OP02_108_531 extends Card {
    public static id: string = "OP02_108_531";
    
    public static _name: string = "Donquixote Rosinante";

    public effect: string = "<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-108_56a658_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_108_531.id;
    }
    
    public getType() : CardType {
        return OP02_108_531.type as CardType;
    }
    
    public getImage() {
        return OP02_108_531.image;
    }
    
    public getName() {
        return OP02_108_531._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_108_531.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_108_531.keywords;
    }
    
    public getPower(): number {
        return OP02_108_531.power;
    }

    public getCounter(): number {
        return OP02_108_531.counter;
    }

    public getLife(): number {
        return OP02_108_531.life;
    }
}
