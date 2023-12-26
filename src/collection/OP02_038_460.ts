
import Card, { CardType } from "../entities/Card";

export default class OP02_038_460 extends Card {
    public static id: string = "OP02_038_460";
    
    public static _name: string = "Nekomamushi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-038_e472c9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Mink Tribe","Wano Country","Nine Red Scabbards"];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_038_460.id;
    }
    
    public getType() : CardType {
        return OP02_038_460.type as CardType;
    }
    
    public getImage() {
        return OP02_038_460.image;
    }
    
    public getName() {
        return OP02_038_460._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_038_460.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_038_460.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_038_460.archetypes;
    }
    
    public getPower(): number {
        return OP02_038_460.power;
    }

    public getCounter(): number {
        return OP02_038_460.counter;
    }

    public getLife(): number {
        return OP02_038_460.life;
    }
}
