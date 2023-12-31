
import Card, { CardType } from "../entities/Card";

export default class OP02_037_315 extends Card {
    public static id: string = "OP02_037_315";
    
    public static _name: string = "Nico Robin";

    public effect: string = "[On Play] Play up to 1 cost 2 or lower {FILM} or {Straw Hat Crew} type Character card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-037_164d58_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Straw Hat Crew"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_037_315.id;
    }
    
    public getType() : CardType {
        return OP02_037_315.type as CardType;
    }
    
    public getImage() {
        return OP02_037_315.image;
    }
    
    public getName() {
        return OP02_037_315._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_037_315.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_037_315.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_037_315.archetypes;
    }
    
    public getPower(): number {
        return OP02_037_315.power;
    }

    public getCounter(): number {
        return OP02_037_315.counter;
    }

    public getLife(): number {
        return OP02_037_315.life;
    }
}
