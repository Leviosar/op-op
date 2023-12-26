
import Card, { CardType } from "../entities/Card";

export default class OP01_096_156 extends Card {
    public static id: string = "OP01_096_156";
    
    public static _name: string = "King";

    public effect: string = "[On Play] DON!! -2:  K.O. 1 of your opponent's cost 3 or lower Characters and 1 of your opponent's cost 2 or lower Characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-096_430605_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_096_156.id;
    }
    
    public getType() : CardType {
        return OP01_096_156.type as CardType;
    }
    
    public getImage() {
        return OP01_096_156.image;
    }
    
    public getName() {
        return OP01_096_156._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_096_156.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_096_156.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_096_156.archetypes;
    }
    
    public getPower(): number {
        return OP01_096_156.power;
    }

    public getCounter(): number {
        return OP01_096_156.counter;
    }

    public getLife(): number {
        return OP01_096_156.life;
    }
}
