
import Card, { CardType } from "../entities/Card";

export default class ST02_012_44 extends Card {
    public static id: string = "ST02_012_44";
    
    public static _name: string = "Bepo";

    public effect: string = "";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-012_61c33f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Mink Tribe","Heart Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_012_44.id;
    }
    
    public getType() : CardType {
        return ST02_012_44.type as CardType;
    }
    
    public getImage() {
        return ST02_012_44.image;
    }
    
    public getName() {
        return ST02_012_44._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_012_44.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_012_44.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST02_012_44.archetypes;
    }
    
    public getPower(): number {
        return ST02_012_44.power;
    }

    public getCounter(): number {
        return ST02_012_44.counter;
    }

    public getLife(): number {
        return ST02_012_44.life;
    }
}
