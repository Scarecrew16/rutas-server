import { Injectable } from '@nestjs/common';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Ruta)
    private rutasRepository: Repository<Ruta>,
  ){}

  async createRuta(createRutaDto: CreateRutaDto){
    const ruta = this.rutasRepository.create(createRutaDto);
    return await this.rutasRepository.save(ruta);
  }

  async getAllRutas(){
    return await this.rutasRepository.find();
  }

  async getRutaById(id:number){
    return await this.rutasRepository.findOneBy({id});
  }

  async update(id:number){
    return await this.rutasRepository.update(id, UpdateRutaDto);
  }

  async remove(id:number){
    return await this.rutasRepository.softDelete(id);
  }
}
