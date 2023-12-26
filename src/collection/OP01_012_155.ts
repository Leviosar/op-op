
import Card, { CardType } from "../entities/Card";

export default class OP01_012_155 extends Card {
    public static id: string = "OP01_012_155";
    
    public static _name: string = "Sai";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-012_88403d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Happosui Army"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_012_155.id;
    }
    
    public getType() : CardType {
        return OP01_012_155.type as CardType;
    }
    
    public getImage() {
        return OP01_012_155.image;
    }
    
    public getName() {
        return OP01_012_155._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_012_155.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_012_155.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_012_155.archetypes;
    }
    
    public getPower(): number {
        return OP01_012_155.power;
    }

    public getCounter(): number {
        return OP01_012_155.counter;
    }

    public getLife(): number {
        return OP01_012_155.life;
    }
}
