import { IsPositive, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateRutaDto {

    @IsPositive()
    @IsOptional()
    id: number

    @IsNotEmpty()
    name:string

    @IsBoolean()
    status: string

    @IsOptional()
    user: string
}
