
import Card, { CardType } from "../entities/Card";

export default class OP02_048_361 extends Card {
    public static id: string = "OP02_048_361";
    
    public static _name: string = "Flower Capital";

    public effect: string = "[Activate: Main] You may trash 1 card with [Wano Country] type and rest this card: Switch up to 1 DON!! card to active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-048_c2f961_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Wano Country"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_048_361.id;
    }
    
    public getType() : CardType {
        return OP02_048_361.type as CardType;
    }
    
    public getImage() {
        return OP02_048_361.image;
    }
    
    public getName() {
        return OP02_048_361._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_048_361.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_048_361.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_048_361.archetypes;
    }
    
    public getPower(): number {
        return OP02_048_361.power;
    }

    public getCounter(): number {
        return OP02_048_361.counter;
    }

    public getLife(): number {
        return OP02_048_361.life;
    }
}
