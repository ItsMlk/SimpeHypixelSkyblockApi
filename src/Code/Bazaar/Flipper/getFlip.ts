import { Main } from "src/Code/main";
import { bazaarProduct } from "../BazaarProduct";

export function getBestFlip(minprofit:Number, maxprice:Number): bazaarProduct[] {
    var products = []; 
    for(var i in Main.bazaarProducts) {
        var product:bazaarProduct = Main.bazaarProducts[i];
        if(product.sellprice < maxprice) {
            var profit:Number = +product.buyprice - +product.sellprice;
            if(profit > minprofit) {
                products.push(product);
            }
        }
    }
    return products;
}