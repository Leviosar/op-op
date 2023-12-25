
import Card, { CardType } from "../entities/Card";

export default class P_005_77 extends Card {
    public static id: string = "P_005_77";
    
    public static _name: string = "Kaido";

    public effect: string = "[DON!! -2] (You may return the specified number of DON!! cards from your field to your DON!! deck) :  This Character gains <Banish> during this turn. (When this character deals damage, any Trigger effects do not activate and the life is sent to the Trash instead.)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-005_d1b947_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Banish"];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_005_77.id;
    }
    
    public getType() : CardType {
        return P_005_77.type as CardType;
    }
    
    public getImage() {
        return P_005_77.image;
    }
    
    public getName() {
        return P_005_77._name;
    }
    
    public getCost(): number {
        return parseInt(P_005_77.cost);
    }
    
    public getKeywords(): string[] {
        return P_005_77.keywords;
    }
    
    public getPower(): number {
        return P_005_77.power;
    }

    public getCounter(): number {
        return P_005_77.counter;
    }

    public getLife(): number {
        return P_005_77.life;
    }
}
