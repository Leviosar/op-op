
import Card, { CardType } from "../entities/Card";

export default class OP02_110_352 extends Card {
    public static id: string = "OP02_110_352";
    
    public static _name: string = "Hina";

    public effect: string = "<Blocker>\r\n[On Block] Choose up to 1 of your opponent's cost 6 or lower Characters. The chosen Character cannot attack during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-110_0c7bf1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_110_352.id;
    }
    
    public getType() : CardType {
        return OP02_110_352.type as CardType;
    }
    
    public getImage() {
        return OP02_110_352.image;
    }
    
    public getName() {
        return OP02_110_352._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_110_352.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_110_352.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_110_352.archetypes;
    }
    
    public getPower(): number {
        return OP02_110_352.power;
    }

    public getCounter(): number {
        return OP02_110_352.counter;
    }

    public getLife(): number {
        return OP02_110_352.life;
    }
}
