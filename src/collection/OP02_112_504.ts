
import Card, { CardType } from "../entities/Card";

export default class OP02_112_504 extends Card {
    public static id: string = "OP02_112_504";
    
    public static _name: string = "Bell-mère";

    public effect: string = "[Activate: Main] You may rest this Character: Give up to 1 of your opponent's Characters −1 cost during this turn. Then, up to 1 of your Leader or Character cards gains +1000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-112_0b6690_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 1000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_112_504.id;
    }
    
    public getType() : CardType {
        return OP02_112_504.type as CardType;
    }
    
    public getImage() {
        return OP02_112_504.image;
    }
    
    public getName() {
        return OP02_112_504._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_112_504.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_112_504.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_112_504.archetypes;
    }
    
    public getPower(): number {
        return OP02_112_504.power;
    }

    public getCounter(): number {
        return OP02_112_504.counter;
    }

    public getLife(): number {
        return OP02_112_504.life;
    }
}
