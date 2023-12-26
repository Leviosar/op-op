
import Card, { CardType } from "../entities/Card";

export default class OP04_035_817 extends Card {
    public static id: string = "OP04_035_817";
    
    public static _name: string = "Spiderweb";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, set up to 1 of your Characters as active.\r\n[Trigger] Up to 1 of your Leader gains +2000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-035_c206eb_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Donquixote Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_035_817.id;
    }
    
    public getType() : CardType {
        return OP04_035_817.type as CardType;
    }
    
    public getImage() {
        return OP04_035_817.image;
    }
    
    public getName() {
        return OP04_035_817._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_035_817.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_035_817.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_035_817.archetypes;
    }
    
    public getPower(): number {
        return OP04_035_817.power;
    }

    public getCounter(): number {
        return OP04_035_817.counter;
    }

    public getLife(): number {
        return OP04_035_817.life;
    }
}
