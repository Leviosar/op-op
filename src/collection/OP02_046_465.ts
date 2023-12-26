
import Card, { CardType } from "../entities/Card";

export default class OP02_046_465 extends Card {
    public static id: string = "OP02_046_465";
    
    public static _name: string = "Diable Jambe Venaison Shoot";

    public effect: string = "[Main] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.\r\n[Trigger] Play up to 1 Character card with a cost of 4 or less and no base effect from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-046_3f9045_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["FILM","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_046_465.id;
    }
    
    public getType() : CardType {
        return OP02_046_465.type as CardType;
    }
    
    public getImage() {
        return OP02_046_465.image;
    }
    
    public getName() {
        return OP02_046_465._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_046_465.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_046_465.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_046_465.archetypes;
    }
    
    public getPower(): number {
        return OP02_046_465.power;
    }

    public getCounter(): number {
        return OP02_046_465.counter;
    }

    public getLife(): number {
        return OP02_046_465.life;
    }
}
