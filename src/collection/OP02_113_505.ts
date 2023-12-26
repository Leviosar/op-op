
import Card, { CardType } from "../entities/Card";

export default class OP02_113_505 extends Card {
    public static id: string = "OP02_113_505";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[When Attacking] Give up to 1 of your opponent's Characters −2 cost during this turn. Then, if there is a Character with a cost of 0, this Character gains +2000 power during this battle.\r\n[Trigger] Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-113_505a28_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_113_505.id;
    }
    
    public getType() : CardType {
        return OP02_113_505.type as CardType;
    }
    
    public getImage() {
        return OP02_113_505.image;
    }
    
    public getName() {
        return OP02_113_505._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_113_505.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_113_505.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_113_505.archetypes;
    }
    
    public getPower(): number {
        return OP02_113_505.power;
    }

    public getCounter(): number {
        return OP02_113_505.counter;
    }

    public getLife(): number {
        return OP02_113_505.life;
    }
}
