
import Card, { CardType } from "../entities/Card";

export default class ST05_016_250 extends Card {
    public static id: string = "ST05_016_250";
    
    public static _name: string = "Lion's Threat: Imperial Earth Bind";

    public effect: string = "[Main] DON!! -2: K.O. up to 1 of your opponent's cost 5 or lower Characters.\r\n[Trigger] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-016_3762d9_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Golden Lion Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_016_250.id;
    }
    
    public getType() : CardType {
        return ST05_016_250.type as CardType;
    }
    
    public getImage() {
        return ST05_016_250.image;
    }
    
    public getName() {
        return ST05_016_250._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_016_250.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_016_250.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST05_016_250.archetypes;
    }
    
    public getPower(): number {
        return ST05_016_250.power;
    }

    public getCounter(): number {
        return ST05_016_250.counter;
    }

    public getLife(): number {
        return ST05_016_250.life;
    }
}
