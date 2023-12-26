
import Card, { CardType } from "../entities/Card";

export default class OP01_074_65 extends Card {
    public static id: string = "OP01_074_65";
    
    public static _name: string = "Bartholomew Kuma";

    public effect: string = "[Blocker] (During your opponent's attack, you may rest this card to make it the target of the attack).\r\n[On K.O.] Play up to one cost 4 or lower [Pacifista] from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-074_9daffc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_074_65.id;
    }
    
    public getType() : CardType {
        return OP01_074_65.type as CardType;
    }
    
    public getImage() {
        return OP01_074_65.image;
    }
    
    public getName() {
        return OP01_074_65._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_074_65.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_074_65.keywords;
    }
    
    public getPower(): number {
        return OP01_074_65.power;
    }

    public getCounter(): number {
        return OP01_074_65.counter;
    }

    public getLife(): number {
        return OP01_074_65.life;
    }
}
