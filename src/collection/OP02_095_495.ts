
import Card, { CardType } from "../entities/Card";

export default class OP02_095_495 extends Card {
    public static id: string = "OP02_095_495";
    
    public static _name: string = "Onigumo";

    public effect: string = "If there is a Character with a cost of 0, this Character gains [Banish].";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-095_6e08fb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_095_495.id;
    }
    
    public getType() : CardType {
        return OP02_095_495.type as CardType;
    }
    
    public getImage() {
        return OP02_095_495.image;
    }
    
    public getName() {
        return OP02_095_495._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_095_495.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_095_495.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_095_495.archetypes;
    }
    
    public getPower(): number {
        return OP02_095_495.power;
    }

    public getCounter(): number {
        return OP02_095_495.counter;
    }

    public getLife(): number {
        return OP02_095_495.life;
    }
}
