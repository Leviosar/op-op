
import Card, { CardType } from "../entities/Card";

export default class ST06_005_287 extends Card {
    public static id: string = "ST06_005_287";
    
    public static _name: string = "Sengoku";

    public effect: string = "[When Attacking] For this turn, -4 cost for one of your opponent's characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-005_65f240_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_005_287.id;
    }
    
    public getType() : CardType {
        return ST06_005_287.type as CardType;
    }
    
    public getImage() {
        return ST06_005_287.image;
    }
    
    public getName() {
        return ST06_005_287._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_005_287.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_005_287.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_005_287.archetypes;
    }
    
    public getPower(): number {
        return ST06_005_287.power;
    }

    public getCounter(): number {
        return ST06_005_287.counter;
    }

    public getLife(): number {
        return ST06_005_287.life;
    }
}
