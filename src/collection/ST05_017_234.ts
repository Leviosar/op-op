
import Card, { CardType } from "../entities/Card";

export default class ST05_017_234 extends Card {
    public static id: string = "ST05_017_234";
    
    public static _name: string = "Union Armado";

    public effect: string = "[Counter] Up to 1 of your {FILM} type Leader or Characters gain +4000 Power during this battle. If that card is a Character, that Character cannot be K.O.'d during this turn.\r\n[Trigger] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-017_f6e3f6_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Pirate Fest"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_017_234.id;
    }
    
    public getType() : CardType {
        return ST05_017_234.type as CardType;
    }
    
    public getImage() {
        return ST05_017_234.image;
    }
    
    public getName() {
        return ST05_017_234._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_017_234.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_017_234.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST05_017_234.archetypes;
    }
    
    public getPower(): number {
        return ST05_017_234.power;
    }

    public getCounter(): number {
        return ST05_017_234.counter;
    }

    public getLife(): number {
        return ST05_017_234.life;
    }
}
