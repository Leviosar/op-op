
import Card, { CardType } from "../entities/Card";

export default class ST01_003_28 extends Card {
    public static id: string = "ST01_003_28";
    
    public static _name: string = "Diable Jambe";

    public effect: string = "[Main] Choose one of your Leader or Characters with the {Straw Hat Crew} trait: During this turn,  your opponent cannot activate <Blocker> when that Leader or Character attacks.\r\n[Trigger] K.O. 1 of your opponent's Characters with a Cost of 3 or less with <Blocker>.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-003_36520e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker> when that Leader or Character attacks.\r\n[Trigger] K.O. 1 of your opponent's Characters with a Cost of 3 or less with <Blocker"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_003_28.id;
    }
    
    public getType() : CardType {
        return ST01_003_28.type as CardType;
    }
    
    public getImage() {
        return ST01_003_28.image;
    }
    
    public getName() {
        return ST01_003_28._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_003_28.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_003_28.keywords;
    }
    
    public getPower(): number {
        return ST01_003_28.power;
    }

    public getCounter(): number {
        return ST01_003_28.counter;
    }

    public getLife(): number {
        return ST01_003_28.life;
    }
}
