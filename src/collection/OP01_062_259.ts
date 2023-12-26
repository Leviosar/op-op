
import Card, { CardType } from "../entities/Card";

export default class OP01_062_259 extends Card {
    public static id: string = "OP01_062_259";
    
    public static _name: string = "Crocodile";

    public effect: string = "[DON!! x1] After you activate an Event, you may draw 1 card if you have 4 or less cards in your hand and haven't drawn a card using this Leader's effect during this turn";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-062_47d06a_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Baroque Works"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP01_062_259.id;
    }
    
    public getType() : CardType {
        return OP01_062_259.type as CardType;
    }
    
    public getImage() {
        return OP01_062_259.image;
    }
    
    public getName() {
        return OP01_062_259._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_062_259.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_062_259.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_062_259.archetypes;
    }
    
    public getPower(): number {
        return OP01_062_259.power;
    }

    public getCounter(): number {
        return OP01_062_259.counter;
    }

    public getLife(): number {
        return OP01_062_259.life;
    }
}
