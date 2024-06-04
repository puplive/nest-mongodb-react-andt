import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [UserModule, OrderModule, GoodsModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
