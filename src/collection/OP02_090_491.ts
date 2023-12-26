
import Card, { CardType } from "../entities/Card";

export default class OP02_090_491 extends Card {
    public static id: string = "OP02_090_491";
    
    public static _name: string = "Hydra";

    public effect: string = "[Main] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Give up to 1 of your opponent's Characters −3000 power during this turn.\r\n[Trigger] If your opponent has 6 or more DON!! cards on their field, your opponent returns 1 DON!! card from their field to their DON!! deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-090_7077d7_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Impel Down"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_090_491.id;
    }
    
    public getType() : CardType {
        return OP02_090_491.type as CardType;
    }
    
    public getImage() {
        return OP02_090_491.image;
    }
    
    public getName() {
        return OP02_090_491._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_090_491.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_090_491.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_090_491.archetypes;
    }
    
    public getPower(): number {
        return OP02_090_491.power;
    }

    public getCounter(): number {
        return OP02_090_491.counter;
    }

    public getLife(): number {
        return OP02_090_491.life;
    }
}
