import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>
  ){}


  async createClient(createClientDto: CreateClientDto) {
    const client = this.clientsRepository.create(createClientDto);
    return await this.clientsRepository.save(client);
  }

  async getAllClients() {
    return await this.clientsRepository.find({});
  }

  async getClientById(id: number) {
    return await this.clientsRepository.findOneBy({id});
  }

  async update(id: number) {
    return await this.clientsRepository.update(id, UpdateClientDto);
  }

  async remove(id: number) {
    return await this.clientsRepository.softDelete(id);
  }
}
