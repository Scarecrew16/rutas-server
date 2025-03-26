import { IsPositive, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateRutaDto {

    @IsPositive()
    @IsOptional()
    id: number

    @IsNotEmpty()
    name:string

    @IsOptional()
    @IsBoolean()
    status: string

    readonly user: User
}
