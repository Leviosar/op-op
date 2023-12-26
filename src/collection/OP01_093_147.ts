
import Card, { CardType } from "../entities/Card";

export default class OP01_093_147 extends Card {
    public static id: string = "OP01_093_147";
    
    public static _name: string = "Ulti";

    public effect: string = "[On Play] (1) (You may rest the specified number of DON!! cards in your Cost Area): Add 1 card from your DON!! deck and rest it.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-093_499034_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_093_147.id;
    }
    
    public getType() : CardType {
        return OP01_093_147.type as CardType;
    }
    
    public getImage() {
        return OP01_093_147.image;
    }
    
    public getName() {
        return OP01_093_147._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_093_147.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_093_147.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_093_147.archetypes;
    }
    
    public getPower(): number {
        return OP01_093_147.power;
    }

    public getCounter(): number {
        return OP01_093_147.counter;
    }

    public getLife(): number {
        return OP01_093_147.life;
    }
}
