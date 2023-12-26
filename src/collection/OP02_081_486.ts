
import Card, { CardType } from "../entities/Card";

export default class OP02_081_486 extends Card {
    public static id: string = "OP02_081_486";
    
    public static _name: string = "Domino";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-081_7fcc55_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Impel Down"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_081_486.id;
    }
    
    public getType() : CardType {
        return OP02_081_486.type as CardType;
    }
    
    public getImage() {
        return OP02_081_486.image;
    }
    
    public getName() {
        return OP02_081_486._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_081_486.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_081_486.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_081_486.archetypes;
    }
    
    public getPower(): number {
        return OP02_081_486.power;
    }

    public getCounter(): number {
        return OP02_081_486.counter;
    }

    public getLife(): number {
        return OP02_081_486.life;
    }
}
