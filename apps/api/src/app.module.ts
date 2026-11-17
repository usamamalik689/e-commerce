import { BullModule } from '@nestjs/bullmq';
import { Controller, Get, Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';

@Controller('health')
class HealthController {
  @Get()
  check() {
    return { status: 'ok' };
  }
}

@Module({
  imports: [
    InfrastructureModule,
    BullModule.forRootAsync({
      useFactory: () => ({
        connection: { url: process.env.REDIS_URL ?? 'redis://127.0.0.1:6379' },
      }),
    }),
  ],
  controllers: [HealthController],
})
export class AppModule {}
