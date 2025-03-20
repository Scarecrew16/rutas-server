import {Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
        // Identificador del usuario
        @PrimaryGeneratedColumn()
        id: number;
        // Nombre del usuario
        @Column({length: 500, nullable: false})
        name: string;
        // Email del usuario
        @Column()
        address: string;
    
        @Column()
        phone:number

        @Column()
        comments:string

        @DeleteDateColumn()
        deletedAt: Date;
}
