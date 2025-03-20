import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ruta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500, unique: true, nullable:false})
    name: string;

    @Column()
    status: boolean;

    @Column()
    user: string;

}
