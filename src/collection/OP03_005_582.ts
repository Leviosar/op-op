
import Card, { CardType } from "../entities/Card";

export default class OP03_005_582 extends Card {
    public static id: string = "OP03_005_582";
    
    public static _name: string = "Thatch";

    public effect: string = "[Activate Main] (Once per turn) This Character gains +2000 power for the turn. Then, place this Character in the trash at the end of the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-005_0b83b2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_005_582.id;
    }
    
    public getType() : CardType {
        return OP03_005_582.type as CardType;
    }
    
    public getImage() {
        return OP03_005_582.image;
    }
    
    public getName() {
        return OP03_005_582._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_005_582.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_005_582.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_005_582.archetypes;
    }
    
    public getPower(): number {
        return OP03_005_582.power;
    }

    public getCounter(): number {
        return OP03_005_582.counter;
    }

    public getLife(): number {
        return OP03_005_582.life;
    }
}
