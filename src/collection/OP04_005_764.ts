
import Card, { CardType } from "../entities/Card";

export default class OP04_005_764 extends Card {
    public static id: string = "OP04_005_764";
    
    public static _name: string = "Kung-Fu Dugong";

    public effect: string = "If you have a [Kung-Fu Dugong] in play other than this Character, this Character gains <Blocker>";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-005_3a6aa5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Animal","Alabasta Kingdom"];
    
    public static power: number = 1000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_005_764.id;
    }
    
    public getType() : CardType {
        return OP04_005_764.type as CardType;
    }
    
    public getImage() {
        return OP04_005_764.image;
    }
    
    public getName() {
        return OP04_005_764._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_005_764.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_005_764.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_005_764.archetypes;
    }
    
    public getPower(): number {
        return OP04_005_764.power;
    }

    public getCounter(): number {
        return OP04_005_764.counter;
    }

    public getLife(): number {
        return OP04_005_764.life;
    }
}
