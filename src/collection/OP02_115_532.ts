
import Card, { CardType } from "../entities/Card";

export default class OP02_115_532 extends Card {
    public static id: string = "OP02_115_532";
    
    public static _name: string = "Monkey.D.Garp";

    public effect: string = "[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with a cost of 0.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-115_78811a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_115_532.id;
    }
    
    public getType() : CardType {
        return OP02_115_532.type as CardType;
    }
    
    public getImage() {
        return OP02_115_532.image;
    }
    
    public getName() {
        return OP02_115_532._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_115_532.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_115_532.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_115_532.archetypes;
    }
    
    public getPower(): number {
        return OP02_115_532.power;
    }

    public getCounter(): number {
        return OP02_115_532.counter;
    }

    public getLife(): number {
        return OP02_115_532.life;
    }
}
