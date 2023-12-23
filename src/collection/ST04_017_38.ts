
import Card, { CardType } from "../entities/Card";

export default class ST04_017_38 extends Card {
    public static id: string = "ST04_017_38";
    
    public static _name: string = "Onigashima ";

    public effect: string = "[Activate Main] You may Rest this card (If your Leader has the [Animal Kingdom Pirates] trait): Add 1 DON!! card from your DON!! deck to your Cost Area in Rest.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-017_80f08b_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST04_017_38.id;
    }
    
    public getType() : CardType {
        return ST04_017_38.type as CardType;
    }
    
    public getImage() {
        return ST04_017_38.image;
    }
    
    public getName() {
        return ST04_017_38._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_017_38.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_017_38.keywords;
    }
}
