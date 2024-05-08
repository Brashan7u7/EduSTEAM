import {  Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { AlumnosService } from "./alumnos.service";
import { alumnosDto } from "./dto/alumnos.dto";

@Controller('alumnos')
export class AlumnosController{
    constructor(private service:AlumnosService){}

    @Get()
    allAlumnos(){
        return this.service.allAlumnos()
    }

    @Get(':id')
    oneAlumno(@Param('id') id:number){
        return this.service.oneAlumnos(id)
    }

    @Post()
    newAlumno(@Body() bodyAlumno:alumnosDto){
        return this.service.agregarAlumno(bodyAlumno)
    }

    @Put(':id')
    updateAlumno(@Param('id')id:number,@Body() bodyAlumno:alumnosDto){
        return this.service.actualizarAlumno(id,bodyAlumno)
    }
}