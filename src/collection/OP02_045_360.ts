
import Card, { CardType } from "../entities/Card";

export default class OP02_045_360 extends Card {
    public static id: string = "OP02_045_360";
    
    public static _name: string = "Three Sword Style: Oni Giri";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +6000 Power during this battle. Then, you may play up to 1 cost 3 or lower Character card without effects from your hand.\r\n[Trigger] Rest up to 1 of your opponent's Leader or cost 5 or lower Characters.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-045_756ad0_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Supernovas","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_045_360.id;
    }
    
    public getType() : CardType {
        return OP02_045_360.type as CardType;
    }
    
    public getImage() {
        return OP02_045_360.image;
    }
    
    public getName() {
        return OP02_045_360._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_045_360.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_045_360.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_045_360.archetypes;
    }
    
    public getPower(): number {
        return OP02_045_360.power;
    }

    public getCounter(): number {
        return OP02_045_360.counter;
    }

    public getLife(): number {
        return OP02_045_360.life;
    }
}
