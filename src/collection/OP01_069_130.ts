
import Card, { CardType } from "../entities/Card";

export default class OP01_069_130 extends Card {
    public static id: string = "OP01_069_130";
    
    public static _name: string = "Caesar Clown";

    public effect: string = "[On K.O.] Play 1 [Smiley] from your deck, then shuffle your deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-069_c813ec_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Scientist","Punk Hazard"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_069_130.id;
    }
    
    public getType() : CardType {
        return OP01_069_130.type as CardType;
    }
    
    public getImage() {
        return OP01_069_130.image;
    }
    
    public getName() {
        return OP01_069_130._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_069_130.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_069_130.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_069_130.archetypes;
    }
    
    public getPower(): number {
        return OP01_069_130.power;
    }

    public getCounter(): number {
        return OP01_069_130.counter;
    }

    public getLife(): number {
        return OP01_069_130.life;
    }
}
