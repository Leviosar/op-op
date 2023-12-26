
import Card, { CardType } from "../entities/Card";

export default class OP04_059_834 extends Card {
    public static id: string = "OP04_059_834";
    
    public static _name: string = "Iceburg";

    public effect: string = "[On Your Opponent's Attack] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your Leader has the {Water Seven} type, this Character gains [Blocker] during this turn.\r\n(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-059_83780c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Water Seven","Galley-La Company"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_059_834.id;
    }
    
    public getType() : CardType {
        return OP04_059_834.type as CardType;
    }
    
    public getImage() {
        return OP04_059_834.image;
    }
    
    public getName() {
        return OP04_059_834._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_059_834.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_059_834.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_059_834.archetypes;
    }
    
    public getPower(): number {
        return OP04_059_834.power;
    }

    public getCounter(): number {
        return OP04_059_834.counter;
    }

    public getLife(): number {
        return OP04_059_834.life;
    }
}
