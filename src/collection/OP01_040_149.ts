
import Card, { CardType } from "../entities/Card";

export default class OP01_040_149 extends Card {
    public static id: string = "OP01_040_149";
    
    public static _name: string = "Kin'emon";

    public effect: string = "[On Play] If your Leader is [Kozuki Oden], you can play 1 cost 3 or lower {Nine Red Scabbards} type Character card from your hand.\r\n[DON!! x1][When attacking][Once per turn] Set 1 of your cost 3 or lower {Nine Red Scabbards} type Characters as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-040_041e83_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Wano Country","Nine Red Scabbards"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_040_149.id;
    }
    
    public getType() : CardType {
        return OP01_040_149.type as CardType;
    }
    
    public getImage() {
        return OP01_040_149.image;
    }
    
    public getName() {
        return OP01_040_149._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_040_149.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_040_149.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_040_149.archetypes;
    }
    
    public getPower(): number {
        return OP01_040_149.power;
    }

    public getCounter(): number {
        return OP01_040_149.counter;
    }

    public getLife(): number {
        return OP01_040_149.life;
    }
}
