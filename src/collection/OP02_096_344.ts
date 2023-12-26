
import Card, { CardType } from "../entities/Card";

export default class OP02_096_344 extends Card {
    public static id: string = "OP02_096_344";
    
    public static _name: string = "Kuzan";

    public effect: string = "[On Play] Draw 1 card.\r\n[When Attacking] Reduce the cost of up to 1 of your opponent's Character by 4 during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-096_a6b8ca_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_096_344.id;
    }
    
    public getType() : CardType {
        return OP02_096_344.type as CardType;
    }
    
    public getImage() {
        return OP02_096_344.image;
    }
    
    public getName() {
        return OP02_096_344._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_096_344.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_096_344.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_096_344.archetypes;
    }
    
    public getPower(): number {
        return OP02_096_344.power;
    }

    public getCounter(): number {
        return OP02_096_344.counter;
    }

    public getLife(): number {
        return OP02_096_344.life;
    }
}
