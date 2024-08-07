export class bazaarProduct {
    public name:String;
    public sellprice:Number;
    public buyprice:Number;
    public sellvolume:Number;
    public buyvolume:Number;
    public sellorders:Number;
    public buyorders:Number;

    constructor(name, sellprice, buyprice, sellvolume, buyvolume, sellorders, buyorders) {
        this.name = name;
        this.sellprice = sellprice;
        this.buyprice = buyprice;
        this.sellvolume = sellvolume;
        this.buyvolume = buyvolume;
        this.sellorders = sellorders;
        this.buyorders = buyorders;
    }
}