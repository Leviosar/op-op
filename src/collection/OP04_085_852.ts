
import Card, { CardType } from "../entities/Card";

export default class OP04_085_852 extends Card {
    public static id: string = "OP04_085_852";
    
    public static _name: string = "Suleiman";

    public effect: string = "[On Play]/[When Attacking] If your Leader has the {Dressrosa} type, give up to 1 of your opponent's Characters −2 cost during this turn. Then, trash 1 card from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-085_13e8af_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Dressrosa"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_085_852.id;
    }
    
    public getType() : CardType {
        return OP04_085_852.type as CardType;
    }
    
    public getImage() {
        return OP04_085_852.image;
    }
    
    public getName() {
        return OP04_085_852._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_085_852.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_085_852.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_085_852.archetypes;
    }
    
    public getPower(): number {
        return OP04_085_852.power;
    }

    public getCounter(): number {
        return OP04_085_852.counter;
    }

    public getLife(): number {
        return OP04_085_852.life;
    }
}
