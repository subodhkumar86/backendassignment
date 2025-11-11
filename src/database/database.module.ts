import { Module } from '@nestjs/common';
import { createConnection } from 'typeorm';
import ormconfig from '../../ormconfig';

@Module({
providers: [
 {
   provide: 'DATA_SOURCE',
   useFactory: async () => {
     const config = {
       type: 'postgres',
       host: process.env.DB_HOST || ormconfig.host,
       port: parseInt(process.env.DB_PORT || String(ormconfig.port)),
       username: process.env.DB_USER || ormconfig.username,
       password: process.env.DB_PASS || ormconfig.password,
       database: process.env.DB_NAME || ormconfig.database,
       synchronize: ormconfig.synchronize,
       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
     };
     return await createConnection(config as any);
   },
 },
],
exports: ['DATA_SOURCE'],
})
export class DatabaseModule {}
