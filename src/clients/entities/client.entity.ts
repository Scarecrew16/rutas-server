import {Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Client {
        // Identificador del usuario
        @PrimaryGeneratedColumn()
        id: number;
        // Nombre del usuario
        @Column({length: 500})
        name: string;
        // Email del usuario
        @Column({unique: true, nullable: false})
        userName: string;
    
        @Column({nullable:false})
        password: string;
    
        @Column()
        role: string;
    
        @DeleteDateColumn()
        deletedAt: Date;
}
