import { Main } from "src/Code/main";
import { Auction } from "../Auction";

export async function searchLowestAuction(name:string) : Promise<Auction[]> {
    var auctions: Auction[] = [];
    for(var auc in Main.auctions) {
        var auction : Auction = Main.auctions[auc];
        if(auction.itemName.includes(name)) {
            auctions.push(auction);
        }
    }
    return auctions;
}
export async function searchAuction(name:string) : Promise<Auction[]> {
    var auctions: Auction[] = [];
    for(var auc in Main.allauctions) {
        var auction : Auction = Main.allauctions[auc];
        if(auction.itemName.includes(name)) {
            auctions.push(auction);
        }
    }
    return auctions;
        
}