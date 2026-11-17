import { v2 as cloudinary } from 'cloudinary';
import {
  Injectable,
  Module,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import Redis from 'ioredis';
import { PrismaClient } from './generated/prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super({
      adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL ??
          'postgresql://ecommerce:ecommerce_dev@127.0.0.1:5432/ecommerce',
      }),
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

@Injectable()
export class CacheService implements OnModuleDestroy {
  private readonly redis = new Redis(
    process.env.REDIS_URL ?? 'redis://127.0.0.1:6379',
    { lazyConnect: true, enableOfflineQueue: false, maxRetriesPerRequest: 1 },
  );

  private connection?: Promise<void>;

  private async connect() {
    if (this.redis.status === 'wait' || this.redis.status === 'end') {
      this.connection = this.redis.connect().finally(() => {
        this.connection = undefined;
      });
    }
    await this.connection;
  }

  async get(key: string) {
    await this.connect();
    return this.redis.get(`cache:${key}`);
  }

  async set(key: string, value: string, ttlSeconds: number) {
    await this.connect();
    await this.redis.set(`cache:${key}`, value, 'EX', ttlSeconds);
  }

  onModuleDestroy() {
    this.redis.disconnect();
  }
}

@Injectable()
export class MediaService {
  getClient() {
    if (!process.env.CLOUDINARY_URL) {
      throw new Error('Set CLOUDINARY_URL to enable media uploads.');
    }
    return cloudinary;
  }
}

@Module({
  providers: [DatabaseService, CacheService, MediaService],
  exports: [DatabaseService, CacheService, MediaService],
})
export class InfrastructureModule {}
