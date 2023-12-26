
import Card, { CardType } from "../entities/Card";

export default class OP04_100_862 extends Card {
    public static id: string = "OP04_100_862";
    
    public static _name: string = "Capone \"Gang\" Bege";

    public effect: string = "[Trigger] Up to 1 of your opponent's Leader or Character cards cannot attack during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-100_03cf4c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Firetank Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_100_862.id;
    }
    
    public getType() : CardType {
        return OP04_100_862.type as CardType;
    }
    
    public getImage() {
        return OP04_100_862.image;
    }
    
    public getName() {
        return OP04_100_862._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_100_862.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_100_862.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_100_862.archetypes;
    }
    
    public getPower(): number {
        return OP04_100_862.power;
    }

    public getCounter(): number {
        return OP04_100_862.counter;
    }

    public getLife(): number {
        return OP04_100_862.life;
    }
}
