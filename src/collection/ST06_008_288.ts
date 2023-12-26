
import Card, { CardType } from "../entities/Card";

export default class ST06_008_288 extends Card {
    public static id: string = "ST06_008_288";
    
    public static _name: string = "Hina";

    public effect: string = "[On Play] For this turn, -4 cost for up to one of your opponent's characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-008_41235a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_008_288.id;
    }
    
    public getType() : CardType {
        return ST06_008_288.type as CardType;
    }
    
    public getImage() {
        return ST06_008_288.image;
    }
    
    public getName() {
        return ST06_008_288._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_008_288.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_008_288.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_008_288.archetypes;
    }
    
    public getPower(): number {
        return ST06_008_288.power;
    }

    public getCounter(): number {
        return ST06_008_288.counter;
    }

    public getLife(): number {
        return ST06_008_288.life;
    }
}
