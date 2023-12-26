
import Card, { CardType } from "../entities/Card";

export default class OP03_095_682 extends Card {
    public static id: string = "OP03_095_682";
    
    public static _name: string = "Soap Sheep";

    public effect: string = "[Main] Give up to 2 of your opponent's Characters -2 Cost during this turn.\r\n[Trigger] Your opponent trashes 1 card from their hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-095_c12584_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["CP9"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_095_682.id;
    }
    
    public getType() : CardType {
        return OP03_095_682.type as CardType;
    }
    
    public getImage() {
        return OP03_095_682.image;
    }
    
    public getName() {
        return OP03_095_682._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_095_682.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_095_682.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_095_682.archetypes;
    }
    
    public getPower(): number {
        return OP03_095_682.power;
    }

    public getCounter(): number {
        return OP03_095_682.counter;
    }

    public getLife(): number {
        return OP03_095_682.life;
    }
}
