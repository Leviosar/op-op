
import Card, { CardType } from "../entities/Card";

export default class OP03_075_595 extends Card {
    public static id: string = "OP03_075_595";
    
    public static _name: string = "Galley-La Company";

    public effect: string = "[Activate Main] You may Rest this Stage: If your Leader is [Iceberg], add 1 DON!! card from your DON!! deck to your Cost Area in Rest.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-075_de9bec_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Water 7","Galley-La Company"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_075_595.id;
    }
    
    public getType() : CardType {
        return OP03_075_595.type as CardType;
    }
    
    public getImage() {
        return OP03_075_595.image;
    }
    
    public getName() {
        return OP03_075_595._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_075_595.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_075_595.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_075_595.archetypes;
    }
    
    public getPower(): number {
        return OP03_075_595.power;
    }

    public getCounter(): number {
        return OP03_075_595.counter;
    }

    public getLife(): number {
        return OP03_075_595.life;
    }
}
