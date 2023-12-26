
import Card, { CardType } from "../entities/Card";

export default class OP01_013_128 extends Card {
    public static id: string = "OP01_013_128";
    
    public static _name: string = "Sanji";

    public effect: string = "[Activate: Main] [Once Per Turn] (Take 1 Life card and put it in your hand): This turn: +2000 power for this Character. Then, give this character up to 2 of your rested DON!!";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-013_8d7770_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_013_128.id;
    }
    
    public getType() : CardType {
        return OP01_013_128.type as CardType;
    }
    
    public getImage() {
        return OP01_013_128.image;
    }
    
    public getName() {
        return OP01_013_128._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_013_128.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_013_128.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_013_128.archetypes;
    }
    
    public getPower(): number {
        return OP01_013_128.power;
    }

    public getCounter(): number {
        return OP01_013_128.counter;
    }

    public getLife(): number {
        return OP01_013_128.life;
    }
}
