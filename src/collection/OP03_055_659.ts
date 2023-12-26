
import Card, { CardType } from "../entities/Card";

export default class OP03_055_659 extends Card {
    public static id: string = "OP03_055_659";
    
    public static _name: string = "Gum Gum Giant Gavel";

    public effect: string = "[Counter] You may trash 1 card from your hand: Give up to 1 of your Leader +4000 power during this battle. Then you may trash the top 2 cards of your deck.\r\n\r\n[Trigger] Return up to 1 Character with a cost of 4 or less to its owner's hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-055_e3651e_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_055_659.id;
    }
    
    public getType() : CardType {
        return OP03_055_659.type as CardType;
    }
    
    public getImage() {
        return OP03_055_659.image;
    }
    
    public getName() {
        return OP03_055_659._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_055_659.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_055_659.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_055_659.archetypes;
    }
    
    public getPower(): number {
        return OP03_055_659.power;
    }

    public getCounter(): number {
        return OP03_055_659.counter;
    }

    public getLife(): number {
        return OP03_055_659.life;
    }
}
