import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Headers } from '@nestjs/common';
import { searchAuction, searchLowestAuction } from './Code/Action/Util/AuctionSearcher';
import { getBestFlip } from './Code/Bazaar/Flipper/getFlip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("getLowestAuction")
  getLowestAuction(@Query('name') name) {
    return searchLowestAuction(name);
  }
  @Get("getSmilarAuction")
  getSmilarAuctions(@Query('name') name) {
    return searchAuction(name);
  }
  @Get("getBestFlip")
  getBestFlip(@Query('minprofit') minprofit:Number,@Query('maxprice') maxprice:Number) {
    return getBestFlip(minprofit, maxprice);
  }
}
