
import Card, { CardType } from "../entities/Card";

export default class OP04_067_838 extends Card {
    public static id: string = "OP04_067_838";
    
    public static _name: string = "Ms. Merry Christmas (Drophy)";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[Trigger] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-067_d9585b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Baroque Works"];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_067_838.id;
    }
    
    public getType() : CardType {
        return OP04_067_838.type as CardType;
    }
    
    public getImage() {
        return OP04_067_838.image;
    }
    
    public getName() {
        return OP04_067_838._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_067_838.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_067_838.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_067_838.archetypes;
    }
    
    public getPower(): number {
        return OP04_067_838.power;
    }

    public getCounter(): number {
        return OP04_067_838.counter;
    }

    public getLife(): number {
        return OP04_067_838.life;
    }
}
