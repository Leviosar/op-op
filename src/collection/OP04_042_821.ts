
import Card, { CardType } from "../entities/Card";

export default class OP04_042_821 extends Card {
    public static id: string = "OP04_042_821";
    
    public static _name: string = "Ipponmatsu";

    public effect: string = "[On Play] Up to 1 of your <Slash> attribute Characters gains +3000 power during this turn. Then, trash 1 card from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-042_35ff42_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Slash"];
    
    public static archetypes: string[] = ["East Blue"];
    
    public static power: number = 1000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_042_821.id;
    }
    
    public getType() : CardType {
        return OP04_042_821.type as CardType;
    }
    
    public getImage() {
        return OP04_042_821.image;
    }
    
    public getName() {
        return OP04_042_821._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_042_821.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_042_821.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_042_821.archetypes;
    }
    
    public getPower(): number {
        return OP04_042_821.power;
    }

    public getCounter(): number {
        return OP04_042_821.counter;
    }

    public getLife(): number {
        return OP04_042_821.life;
    }
}
