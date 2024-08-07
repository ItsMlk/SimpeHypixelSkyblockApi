export class Auction {
    public uuid;
    public start;
    public end;
    public itemName;
    public teir;
    public price;

    constructor(uuid, start, end, itemName, teir, price) {
        this.uuid = uuid;
        this.start = start;
        this.end = end;
        this.itemName = itemName;
        this.teir = teir;
        this.price = price;
    }
}