
import Card, { CardType } from "../entities/Card";

export default class OP04_106_783 extends Card {
    public static id: string = "OP04_106_783";
    
    public static _name: string = "Charlotte Bavarois";

    public effect: string = "[DON!! x1] If you have less Life cards than your opponent, this Character gains +1000 Power.\r\n[Trigger] You may discard 1 card from your hand: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-106_8d360e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Big Mom Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_106_783.id;
    }
    
    public getType() : CardType {
        return OP04_106_783.type as CardType;
    }
    
    public getImage() {
        return OP04_106_783.image;
    }
    
    public getName() {
        return OP04_106_783._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_106_783.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_106_783.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_106_783.archetypes;
    }
    
    public getPower(): number {
        return OP04_106_783.power;
    }

    public getCounter(): number {
        return OP04_106_783.counter;
    }

    public getLife(): number {
        return OP04_106_783.life;
    }
}
