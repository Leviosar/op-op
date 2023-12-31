
import Card, { CardType } from "../entities/Card";

export default class ST05_013_254 extends Card {
    public static id: string = "ST05_013_254";
    
    public static _name: string = "Binz";

    public effect: string = "";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-013_35939d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Neo Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_013_254.id;
    }
    
    public getType() : CardType {
        return ST05_013_254.type as CardType;
    }
    
    public getImage() {
        return ST05_013_254.image;
    }
    
    public getName() {
        return ST05_013_254._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_013_254.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_013_254.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST05_013_254.archetypes;
    }
    
    public getPower(): number {
        return ST05_013_254.power;
    }

    public getCounter(): number {
        return ST05_013_254.counter;
    }

    public getLife(): number {
        return ST05_013_254.life;
    }
}
