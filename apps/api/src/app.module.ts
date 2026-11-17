import { BullModule } from '@nestjs/bullmq';
import { Controller, Get, Module } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InfrastructureModule } from './infrastructure.module';

@ApiTags('Health')
@Controller('health')
class HealthController {
  @Get()
  @ApiOperation({ summary: 'Check that the API process is running' })
  @ApiOkResponse({
    description: 'The HTTP process is running. Does not check external services.',
    schema: {
      type: 'object',
      required: ['status'],
      properties: { status: { type: 'string', enum: ['ok'], example: 'ok' } },
    },
  })
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
