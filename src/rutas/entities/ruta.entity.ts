import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ruta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500, unique: true, nullable:false})
    name: string;

    @Column()
    status: Boolean;

    @OneToOne(
        ()=> User,
        (user:User) => user.ruta
    )
    
    user:User;
}
