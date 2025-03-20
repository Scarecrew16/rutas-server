import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';



@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidosRepository: Repository<Pedido>,
  ){}

  async createPedido(createPedidoDto: CreatePedidoDto){
    const pedido = this.pedidosRepository.create(createPedidoDto);
    return await this.pedidosRepository.save(pedido);
  }

  async getAllPedidos(){
    return await this.pedidosRepository.find();
  }

  async getPedidoById(id:number){
    return await this.pedidosRepository.findOneBy({id});
  }

  async update(id:number){
    return await this.pedidosRepository.update(id, UpdatePedidoDto)
  }

  async remove(id:number){
    return await this.pedidosRepository.softDelete(id);
  }
}
