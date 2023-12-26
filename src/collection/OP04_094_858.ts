
import Card, { CardType } from "../entities/Card";

export default class OP04_094_858 extends Card {
    public static id: string = "OP04_094_858";
    
    public static _name: string = "Trueno Bastardo";

    public effect: string = "[Main] Choose up to 1 of your opponent's Characters with a cost of 4 or less and K.O. it. If you have 15 or more cards in your trash, choose up to 1 of your opponent's Characters with a cost of 6 or less instead of a Character with a cost of 4 or less.\r\n[Trigger] You may rest your Leader: K.O. up to 1 of your opponent's Characters with a cost of 5 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-094_282bb1_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Dressrosa"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_094_858.id;
    }
    
    public getType() : CardType {
        return OP04_094_858.type as CardType;
    }
    
    public getImage() {
        return OP04_094_858.image;
    }
    
    public getName() {
        return OP04_094_858._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_094_858.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_094_858.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_094_858.archetypes;
    }
    
    public getPower(): number {
        return OP04_094_858.power;
    }

    public getCounter(): number {
        return OP04_094_858.counter;
    }

    public getLife(): number {
        return OP04_094_858.life;
    }
}
