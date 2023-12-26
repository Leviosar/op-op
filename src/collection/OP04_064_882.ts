
import Card, { CardType } from "../entities/Card";

export default class OP04_064_882 extends Card {
    public static id: string = "OP04_064_882";
    
    public static _name: string = "Ms. All Sunday";

    public effect: string = "[On Play] Add up to 1 card from your DON!! deck and rest it. Then, if you have 6 or more DON!! cards on your field, draw 1 card.\r\n\r\n[Trigger] DON!! -2: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-064_a132bc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Baroque Works"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_064_882.id;
    }
    
    public getType() : CardType {
        return OP04_064_882.type as CardType;
    }
    
    public getImage() {
        return OP04_064_882.image;
    }
    
    public getName() {
        return OP04_064_882._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_064_882.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_064_882.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_064_882.archetypes;
    }
    
    public getPower(): number {
        return OP04_064_882.power;
    }

    public getCounter(): number {
        return OP04_064_882.counter;
    }

    public getLife(): number {
        return OP04_064_882.life;
    }
}
