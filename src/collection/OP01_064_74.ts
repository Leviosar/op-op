
import Card, { CardType } from "../entities/Card";

export default class OP01_064_74 extends Card {
    public static id: string = "OP01_064_74";
    
    public static _name: string = "Alvida";

    public effect: string = "[DON!! x1] [When Attacking] You may trash 1 card from your hand: Return 1 of your opponent's Characters with a cost of 3 or less to their hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-064_1d95d5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Buggy Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_064_74.id;
    }
    
    public getType() : CardType {
        return OP01_064_74.type as CardType;
    }
    
    public getImage() {
        return OP01_064_74.image;
    }
    
    public getName() {
        return OP01_064_74._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_064_74.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_064_74.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_064_74.archetypes;
    }
    
    public getPower(): number {
        return OP01_064_74.power;
    }

    public getCounter(): number {
        return OP01_064_74.counter;
    }

    public getLife(): number {
        return OP01_064_74.life;
    }
}
