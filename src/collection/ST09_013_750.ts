
import Card, { CardType } from "../entities/Card";

export default class ST09_013_750 extends Card {
    public static id: string = "ST09_013_750";
    
    public static _name: string = "Yamato";

    public effect: string = "";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-013_207d80_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Land of Wano"];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_013_750.id;
    }
    
    public getType() : CardType {
        return ST09_013_750.type as CardType;
    }
    
    public getImage() {
        return ST09_013_750.image;
    }
    
    public getName() {
        return ST09_013_750._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_013_750.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_013_750.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST09_013_750.archetypes;
    }
    
    public getPower(): number {
        return ST09_013_750.power;
    }

    public getCounter(): number {
        return ST09_013_750.counter;
    }

    public getLife(): number {
        return ST09_013_750.life;
    }
}
