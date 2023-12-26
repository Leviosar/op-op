
import Card, { CardType } from "../entities/Card";

export default class OP04_037_819 extends Card {
    public static id: string = "OP04_037_819";
    
    public static _name: string = "Flapping Thread";

    public effect: string = "[Counter] If your Leader has the {Donquixote Pirates} type, up to 1 of your Leader or Character cards gains +2000 power during this turn.\r\n[Trigger] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-037_f9365a_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Donquixote Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_037_819.id;
    }
    
    public getType() : CardType {
        return OP04_037_819.type as CardType;
    }
    
    public getImage() {
        return OP04_037_819.image;
    }
    
    public getName() {
        return OP04_037_819._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_037_819.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_037_819.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_037_819.archetypes;
    }
    
    public getPower(): number {
        return OP04_037_819.power;
    }

    public getCounter(): number {
        return OP04_037_819.counter;
    }

    public getLife(): number {
        return OP04_037_819.life;
    }
}
