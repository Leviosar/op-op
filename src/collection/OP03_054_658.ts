
import Card, { CardType } from "../entities/Card";

export default class OP03_054_658 extends Card {
    public static id: string = "OP03_054_658";
    
    public static _name: string = "Usopp's Rubber Band of Doom!";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +2000 Power during this battle. Then you may trash the top card of your deck.\r\n\r\n[Trigger] Draw 1 Card. You may trash the top card of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-054_c255c8_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_054_658.id;
    }
    
    public getType() : CardType {
        return OP03_054_658.type as CardType;
    }
    
    public getImage() {
        return OP03_054_658.image;
    }
    
    public getName() {
        return OP03_054_658._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_054_658.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_054_658.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_054_658.archetypes;
    }
    
    public getPower(): number {
        return OP03_054_658.power;
    }

    public getCounter(): number {
        return OP03_054_658.counter;
    }

    public getLife(): number {
        return OP03_054_658.life;
    }
}
