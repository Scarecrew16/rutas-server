import { IsPositive, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateClientDto {

    @IsPositive()
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    phone:number;

    @IsOptional()
    comments:string;
}
