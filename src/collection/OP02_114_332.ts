
import Card, { CardType } from "../entities/Card";

export default class OP02_114_332 extends Card {
    public static id: string = "OP02_114_332";
    
    public static _name: string = "Borsalino";

    public effect: string = "[Opponent's turn] This Character can't be K.O.ed by effects and it gains +1000 Power.\r\n<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-114_52742e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_114_332.id;
    }
    
    public getType() : CardType {
        return OP02_114_332.type as CardType;
    }
    
    public getImage() {
        return OP02_114_332.image;
    }
    
    public getName() {
        return OP02_114_332._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_114_332.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_114_332.keywords;
    }
    
    public getPower(): number {
        return OP02_114_332.power;
    }

    public getCounter(): number {
        return OP02_114_332.counter;
    }

    public getLife(): number {
        return OP02_114_332.life;
    }
}
