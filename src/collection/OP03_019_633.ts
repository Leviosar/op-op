
import Card, { CardType } from "../entities/Card";

export default class OP03_019_633 extends Card {
    public static id: string = "OP03_019_633";
    
    public static _name: string = "Fiery Doll";

    public effect: string = "[Main] Your Leader gains +4000 Power during this turn.\r\n[Trigger] Give up to 1 of your opponent's Leader or Characters -10000 Power during this turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-019_562531_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_019_633.id;
    }
    
    public getType() : CardType {
        return OP03_019_633.type as CardType;
    }
    
    public getImage() {
        return OP03_019_633.image;
    }
    
    public getName() {
        return OP03_019_633._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_019_633.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_019_633.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_019_633.archetypes;
    }
    
    public getPower(): number {
        return OP03_019_633.power;
    }

    public getCounter(): number {
        return OP03_019_633.counter;
    }

    public getLife(): number {
        return OP03_019_633.life;
    }
}
