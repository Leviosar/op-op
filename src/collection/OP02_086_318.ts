
import Card, { CardType } from "../entities/Card";

export default class OP02_086_318 extends Card {
    public static id: string = "OP02_086_318";
    
    public static _name: string = "Minokoala";

    public effect: string = "<Blocker>\r\n[On K.O.] If your Leader has {{Impel Down}} as a type, add 1 DON!! card from your DON!! deck and rest it.\r\n";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-086_a5f09f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_086_318.id;
    }
    
    public getType() : CardType {
        return OP02_086_318.type as CardType;
    }
    
    public getImage() {
        return OP02_086_318.image;
    }
    
    public getName() {
        return OP02_086_318._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_086_318.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_086_318.keywords;
    }
    
    public getPower(): number {
        return OP02_086_318.power;
    }

    public getCounter(): number {
        return OP02_086_318.counter;
    }

    public getLife(): number {
        return OP02_086_318.life;
    }
}
