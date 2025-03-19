import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  async createUser(createUserDto: CreateUserDto){
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async getAllUsers(){
    return await this.usersRepository.find();
  }

  async getUserById(id:number){
    return await this.usersRepository.findOneBy({id});
  }

  async update(id:number){
    return await this.usersRepository.update(id, UpdateUserDto);
  }

  async remove(id:number){
    return await this.usersRepository.softDelete(id);
  }

}