
import Card, { CardType } from "../entities/Card";

export default class ST02_016_111 extends Card {
    public static id: string = "ST02_016_111";
    
    public static _name: string = "Repel";

    public effect: string = "[Counter]  Your Leader or 1 of your Characters gains +4000 Power during this battle. Then, set 1 of your DON!! rested as active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-016_0f7bd3_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Kid Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_016_111.id;
    }
    
    public getType() : CardType {
        return ST02_016_111.type as CardType;
    }
    
    public getImage() {
        return ST02_016_111.image;
    }
    
    public getName() {
        return ST02_016_111._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_016_111.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_016_111.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST02_016_111.archetypes;
    }
    
    public getPower(): number {
        return ST02_016_111.power;
    }

    public getCounter(): number {
        return ST02_016_111.counter;
    }

    public getLife(): number {
        return ST02_016_111.life;
    }
}
