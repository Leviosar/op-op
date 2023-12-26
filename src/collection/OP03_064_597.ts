
import Card, { CardType } from "../entities/Card";

export default class OP03_064_597 extends Card {
    public static id: string = "OP03_064_597";
    
    public static _name: string = "Tilestone";

    public effect: string = "[On K.O.] If your Leader has the {Galley-La Company} type, add 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-064_4902ad_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_064_597.id;
    }
    
    public getType() : CardType {
        return OP03_064_597.type as CardType;
    }
    
    public getImage() {
        return OP03_064_597.image;
    }
    
    public getName() {
        return OP03_064_597._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_064_597.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_064_597.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_064_597.archetypes;
    }
    
    public getPower(): number {
        return OP03_064_597.power;
    }

    public getCounter(): number {
        return OP03_064_597.counter;
    }

    public getLife(): number {
        return OP03_064_597.life;
    }
}
