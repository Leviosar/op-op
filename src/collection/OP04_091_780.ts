
import Card, { CardType } from "../entities/Card";

export default class OP04_091_780 extends Card {
    public static id: string = "OP04_091_780";
    
    public static _name: string = "Leo";

    public effect: string = "[On Play] You may rest 1 of your Leader: If your Leader has the {Dressrosa} type, KO up to 1 of your opponent's Cost 1 or lower Characters. Then, trash 2 cards from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-091_6210ea_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Tontatta","Dressrosa"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_091_780.id;
    }
    
    public getType() : CardType {
        return OP04_091_780.type as CardType;
    }
    
    public getImage() {
        return OP04_091_780.image;
    }
    
    public getName() {
        return OP04_091_780._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_091_780.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_091_780.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_091_780.archetypes;
    }
    
    public getPower(): number {
        return OP04_091_780.power;
    }

    public getCounter(): number {
        return OP04_091_780.counter;
    }

    public getLife(): number {
        return OP04_091_780.life;
    }
}
