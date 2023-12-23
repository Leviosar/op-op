
import Card, { CardType } from "../entities/Card";

export default class OP01_094_238 extends Card {
    public static id: string = "OP01_094_238";
    
    public static _name: string = "Kaido";

    public effect: string = "[On Play] Don!! -6: If your Leader has the {Animal Kingdom Pirates} type, K.O. all Characters other than this one.\r\n \r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-094_50b5cc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "10";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_094_238.id;
    }
    
    public getType() : CardType {
        return OP01_094_238.type as CardType;
    }
    
    public getImage() {
        return OP01_094_238.image;
    }
    
    public getName() {
        return OP01_094_238._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_094_238.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_094_238.keywords;
    }
}
