
import Card, { CardType } from "../entities/Card";

export default class OP04_055_831 extends Card {
    public static id: string = "OP04_055_831";
    
    public static _name: string = "Plague Rounds";

    public effect: string = "[Main] You may trash 1 [Ice Oni] from your hand and place 1 Character with a cost of 4 or less at the bottom of the owner's deck: Play 1 [Ice Oni] from your trash.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-055_050fbb_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_055_831.id;
    }
    
    public getType() : CardType {
        return OP04_055_831.type as CardType;
    }
    
    public getImage() {
        return OP04_055_831.image;
    }
    
    public getName() {
        return OP04_055_831._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_055_831.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_055_831.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_055_831.archetypes;
    }
    
    public getPower(): number {
        return OP04_055_831.power;
    }

    public getCounter(): number {
        return OP04_055_831.counter;
    }

    public getLife(): number {
        return OP04_055_831.life;
    }
}
