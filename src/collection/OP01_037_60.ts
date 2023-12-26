
import Card, { CardType } from "../entities/Card";

export default class OP01_037_60 extends Card {
    public static id: string = "OP01_037_60";
    
    public static _name: string = "Kawamatsu";

    public effect: string = "[Trigger]: Play this card. ";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-037_421381_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Fish-Man","Wano Country","Nine Red Scabbards"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_037_60.id;
    }
    
    public getType() : CardType {
        return OP01_037_60.type as CardType;
    }
    
    public getImage() {
        return OP01_037_60.image;
    }
    
    public getName() {
        return OP01_037_60._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_037_60.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_037_60.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_037_60.archetypes;
    }
    
    public getPower(): number {
        return OP01_037_60.power;
    }

    public getCounter(): number {
        return OP01_037_60.counter;
    }

    public getLife(): number {
        return OP01_037_60.life;
    }
}
