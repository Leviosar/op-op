
import Card, { CardType } from "../entities/Card";

export default class OP01_103_102 extends Card {
    public static id: string = "OP01_103_102";
    
    public static _name: string = "Scratchmen Apoo";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-103_523240_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates","On Air Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_103_102.id;
    }
    
    public getType() : CardType {
        return OP01_103_102.type as CardType;
    }
    
    public getImage() {
        return OP01_103_102.image;
    }
    
    public getName() {
        return OP01_103_102._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_103_102.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_103_102.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_103_102.archetypes;
    }
    
    public getPower(): number {
        return OP01_103_102.power;
    }

    public getCounter(): number {
        return OP01_103_102.counter;
    }

    public getLife(): number {
        return OP01_103_102.life;
    }
}
