import { bazaarProduct } from "./BazaarProduct";

export async function getAllBazaars(BazaarProducts:Array<bazaarProduct>) {
    const prods = await fetch("https://api.hypixel.net/v2/skyblock/bazaar").then(response => response.json());
    for(var i in prods["products"]) {
        var prod = prods["products"][i]["quick_status"];
        BazaarProducts.push(new bazaarProduct(i, prod["sellPrice"], prod["buyPrice"], prod["sellVolume"], prod["buyVolume"], prod["sellOrders"], prod["buyOrders"]));
    }
}