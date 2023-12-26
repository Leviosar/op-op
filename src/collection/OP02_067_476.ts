
import Card, { CardType } from "../entities/Card";

export default class OP02_067_476 extends Card {
    public static id: string = "OP02_067_476";
    
    public static _name: string = "Arabesque Brick Fist";

    public effect: string = "[Main] Return up to 1 Character with a cost of 4 or less to the owner's hand.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-067_4a1a20_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Fish-Man","Impel Down"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_067_476.id;
    }
    
    public getType() : CardType {
        return OP02_067_476.type as CardType;
    }
    
    public getImage() {
        return OP02_067_476.image;
    }
    
    public getName() {
        return OP02_067_476._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_067_476.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_067_476.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_067_476.archetypes;
    }
    
    public getPower(): number {
        return OP02_067_476.power;
    }

    public getCounter(): number {
        return OP02_067_476.counter;
    }

    public getLife(): number {
        return OP02_067_476.life;
    }
}
