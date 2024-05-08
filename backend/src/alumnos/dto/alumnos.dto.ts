import { IsDate, IsNumber, IsString } from 'class-validator';

export class alumnosDto{
    @IsString()
    nombre: string;

    @IsString()
    paterno:string;

    @IsString()
    materno:string;

    @IsString()
    correo:string 

    @IsString()
    constrasena:string

    @IsDate()
    fechReg:Date;

    @IsNumber()
    id_curso:number;

    @IsNumber()
    idProgreso:number;

}