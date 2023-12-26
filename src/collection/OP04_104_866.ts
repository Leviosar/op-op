
import Card, { CardType } from "../entities/Card";

export default class OP04_104_866 extends Card {
    public static id: string = "OP04_104_866";
    
    public static _name: string = "Sanji";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[Trigger] You may trash 1 card from your hand: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-104_e9a2d5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The Vinsmoke Family"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_104_866.id;
    }
    
    public getType() : CardType {
        return OP04_104_866.type as CardType;
    }
    
    public getImage() {
        return OP04_104_866.image;
    }
    
    public getName() {
        return OP04_104_866._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_104_866.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_104_866.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_104_866.archetypes;
    }
    
    public getPower(): number {
        return OP04_104_866.power;
    }

    public getCounter(): number {
        return OP04_104_866.counter;
    }

    public getLife(): number {
        return OP04_104_866.life;
    }
}
