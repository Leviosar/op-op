
import Card, { CardType } from "../entities/Card";

export default class OP01_121_146 extends Card {
    public static id: string = "OP01_121_146";
    
    public static _name: string = "Yamato";

    public effect: string = "This card's name is also treated as (Kozuki Oden).\r\n<Double Attack>\r\n<Banish>";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-121_fe334b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Double Attack>\r\n<Banish"];
    
    public static archetypes: string[] = ["Wano Country"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_121_146.id;
    }
    
    public getType() : CardType {
        return OP01_121_146.type as CardType;
    }
    
    public getImage() {
        return OP01_121_146.image;
    }
    
    public getName() {
        return OP01_121_146._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_121_146.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_121_146.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_121_146.archetypes;
    }
    
    public getPower(): number {
        return OP01_121_146.power;
    }

    public getCounter(): number {
        return OP01_121_146.counter;
    }

    public getLife(): number {
        return OP01_121_146.life;
    }
}
