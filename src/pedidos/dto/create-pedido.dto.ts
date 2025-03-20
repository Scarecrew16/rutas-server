import { IsPositive, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePedidoDto {

    @IsPositive()
    @IsOptional() 
    id?:number;
    
    @IsNotEmpty()
    cliente:string;
    
    @IsOptional()
    statusPedido: string;
    
    @IsNotEmpty()
    cantidad:number;
    
    @IsNotEmpty()
    concepto:string;
    
    @IsOptional()
    createdAt:Date;
    
    @IsOptional()
    completedAT:Date;

}
