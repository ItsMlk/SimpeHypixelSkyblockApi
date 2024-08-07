import {Auction} from './Auction'

export async function getAllAuction(auctions:Map<String, Auction>, allauctions:Array<Auction>) {
    const pageCount = await fetch("https://api.hypixel.net/v2/skyblock/auctions").then(response => response.json());
    for(var i = 0; i < pageCount["totalPages"]; i++) {
        const auctionlist = await fetch("https://api.hypixel.net/v2/skyblock/auctions?page={}".replace("{}", i + "")).then(response => response.json());
        for(var j in auctionlist["auctions"]) {
            const auc = auctionlist["auctions"][j];
            if(auc["bin"]) {
                if(auctions.has(auc["item_name"])) {
                    const hasedauc = auctions.get(auc["item_name"]);
                    if(hasedauc.price > auc["starting_bid"]) {
                        auctions.delete(auc["item_name"]);
                        auctions[auc["item_name"]] = new Auction(auc["uuid"], auc["start"], auc["end"], auc["item_name"], auc["tier"], auc["starting_bid"]);
                    }
                }else {
                    auctions[auc["item_name"]] = new Auction(auc["uuid"], auc["start"], auc["end"], auc["item_name"], auc["tier"], auc["starting_bid"]); 
                }
                allauctions.push(new Auction(auc["uuid"], auc["start"], auc["end"], auc["item_name"], auc["tier"], auc["starting_bid"]));
            }
        }
    }
}