
import Card, { CardType } from "../entities/Card";

export default class OP02_115_506 extends Card {
    public static id: string = "OP02_115_506";
    
    public static _name: string = "Monkey.D.Garp";

    public effect: string = "[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with a cost of 0.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-115_4c855d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_115_506.id;
    }
    
    public getType() : CardType {
        return OP02_115_506.type as CardType;
    }
    
    public getImage() {
        return OP02_115_506.image;
    }
    
    public getName() {
        return OP02_115_506._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_115_506.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_115_506.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_115_506.archetypes;
    }
    
    public getPower(): number {
        return OP02_115_506.power;
    }

    public getCounter(): number {
        return OP02_115_506.counter;
    }

    public getLife(): number {
        return OP02_115_506.life;
    }
}
