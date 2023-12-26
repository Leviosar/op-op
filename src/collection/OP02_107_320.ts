
import Card, { CardType } from "../entities/Card";

export default class OP02_107_320 extends Card {
    public static id: string = "OP02_107_320";
    
    public static _name: string = "Doberman";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-107_f0e325_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_107_320.id;
    }
    
    public getType() : CardType {
        return OP02_107_320.type as CardType;
    }
    
    public getImage() {
        return OP02_107_320.image;
    }
    
    public getName() {
        return OP02_107_320._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_107_320.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_107_320.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_107_320.archetypes;
    }
    
    public getPower(): number {
        return OP02_107_320.power;
    }

    public getCounter(): number {
        return OP02_107_320.counter;
    }

    public getLife(): number {
        return OP02_107_320.life;
    }
}
