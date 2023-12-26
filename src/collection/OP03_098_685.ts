
import Card, { CardType } from "../entities/Card";

export default class OP03_098_685 extends Card {
    public static id: string = "OP03_098_685";
    
    public static _name: string = "Enies Lobby";

    public effect: string = "[Activate: Main] You may rest this Stage: If your Leader has {CP} in its types, give up to 1 of your opponent's Characters -2 cost during this turn.\r\n[Trigger] Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-098_57f7ac_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["World Government"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_098_685.id;
    }
    
    public getType() : CardType {
        return OP03_098_685.type as CardType;
    }
    
    public getImage() {
        return OP03_098_685.image;
    }
    
    public getName() {
        return OP03_098_685._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_098_685.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_098_685.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_098_685.archetypes;
    }
    
    public getPower(): number {
        return OP03_098_685.power;
    }

    public getCounter(): number {
        return OP03_098_685.counter;
    }

    public getLife(): number {
        return OP03_098_685.life;
    }
}
