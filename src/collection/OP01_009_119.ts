
import Card, { CardType } from "../entities/Card";

export default class OP01_009_119 extends Card {
    public static id: string = "OP01_009_119";
    
    public static _name: string = "Carrot";

    public effect: string = "[Trigger] Play this card.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-009_accee7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Mink Tribe"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_009_119.id;
    }
    
    public getType() : CardType {
        return OP01_009_119.type as CardType;
    }
    
    public getImage() {
        return OP01_009_119.image;
    }
    
    public getName() {
        return OP01_009_119._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_009_119.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_009_119.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_009_119.archetypes;
    }
    
    public getPower(): number {
        return OP01_009_119.power;
    }

    public getCounter(): number {
        return OP01_009_119.counter;
    }

    public getLife(): number {
        return OP01_009_119.life;
    }
}
