import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { CommonsModule } from './commons/commons.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoreModule, CommonsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
