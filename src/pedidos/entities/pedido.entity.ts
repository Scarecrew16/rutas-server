import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    cliente:string;

    @Column()
    statusPedido: string;

    @Column()
    cantidad:number;

    @Column()
    concepto:string;

    @Column()
    createdAt:Date;

    @Column()
    completedAT:Date;

    @DeleteDateColumn()
    deletedAt:Date;

}
