
import Card, { CardType } from "../entities/Card";

export default class OP04_111_872 extends Card {
    public static id: string = "OP04_111_872";
    
    public static _name: string = "Hera";

    public effect: string = "[Activate: Main] You may trash 1 of your {Homies} type Characters other than this Character and rest this Character: Set up to 1 of your [Charlotte Linlin] Characters as active.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-111_7e946f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates","Homies"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_111_872.id;
    }
    
    public getType() : CardType {
        return OP04_111_872.type as CardType;
    }
    
    public getImage() {
        return OP04_111_872.image;
    }
    
    public getName() {
        return OP04_111_872._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_111_872.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_111_872.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_111_872.archetypes;
    }
    
    public getPower(): number {
        return OP04_111_872.power;
    }

    public getCounter(): number {
        return OP04_111_872.counter;
    }

    public getLife(): number {
        return OP04_111_872.life;
    }
}
