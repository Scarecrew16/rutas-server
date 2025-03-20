import { IsPositive, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateRutaDto {

    @IsPositive()
    @IsOptional()
    id?: number

    @IsNotEmpty()
    name:string

    @IsOptional()
    status: string

    @IsOptional()
    user: string
}
