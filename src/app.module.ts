import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { RutasModule } from './rutas/rutas.module';
import { PedidosModule } from './pedidos/pedidos.module';


@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "Yegua1235$",
      database: "yegua",
      autoLoadEntities: true,
      synchronize: true

    }),
    ClientsModule,
    RutasModule,
    PedidosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
