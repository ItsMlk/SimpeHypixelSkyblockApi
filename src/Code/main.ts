import { Auction } from "./Action/Auction";
import { getAllAuction } from "./Action/auctionGetterUtil";
import { searchAuction } from "./Action/Util/AuctionSearcher";
import { getAllBazaars } from "./Bazaar/bazaarGetterUtil";
import { bazaarProduct } from "./Bazaar/BazaarProduct";

export class Main {
    private UpdateTime;
    static auctions:Map<String, Auction> = new Map<String, Auction>();
    static allauctions: Auction[] = [];

    static tempauctions:Map<String, Auction> = new Map<String, Auction>();
    static tempallauctions: Auction[] = [];

    static tempbazaarProducts:bazaarProduct[] = [];
    static bazaarProducts:bazaarProduct[] = [];

    constructor(updateTime:Number) {
        this.UpdateTime = updateTime
    }

    public async start() {
        Main.auctionTask();
        Main.bazaarTask();

        const interval = setInterval(this.onUpdate, this.UpdateTime)
    }

    public async onUpdate() {
        Main.auctionTask();
        Main.bazaarTask();
    }

    static async auctionTask() {
        await getAllAuction(Main.tempauctions, Main.tempallauctions);
        Main.auctions = Main.tempauctions;
        Main.allauctions = Main.tempallauctions;
        Main.tempauctions =  new Map<String, Auction>();
        Main.tempallauctions = [];

        console.log("checkup auction ended")
    }

    static async bazaarTask() {
        await getAllBazaars(Main.tempbazaarProducts);
        Main.bazaarProducts = Main.tempbazaarProducts;
        Main.tempbazaarProducts = [];

        console.log("checkup Bazaar ended")
    }

}