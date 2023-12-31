
import Card, { CardType } from "../entities/Card";

export default class OP01_076_61 extends Card {
    public static id: string = "OP01_076_61";
    
    public static _name: string = "Bellamy";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-076_2d58a2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Dressrosa"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_076_61.id;
    }
    
    public getType() : CardType {
        return OP01_076_61.type as CardType;
    }
    
    public getImage() {
        return OP01_076_61.image;
    }
    
    public getName() {
        return OP01_076_61._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_076_61.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_076_61.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_076_61.archetypes;
    }
    
    public getPower(): number {
        return OP01_076_61.power;
    }

    public getCounter(): number {
        return OP01_076_61.counter;
    }

    public getLife(): number {
        return OP01_076_61.life;
    }
}
