import { Controller, HttpException, HttpStatus } from "@nestjs/common";
import { AlumnosService } from "./alumnos.service";
import { DataSource } from 'typeorm';
import { alumnosEntity } from "./entity/alumnos.entity";
import { alumnosDto } from "./dto/alumnos.dto";

@Controller('alumnos')
export class AlumnosController{
    constructor(private dataSource:DataSource){}

    allAlumnos(){
        try{
            return this.dataSource.getRepository(alumnosEntity).find({relations:['curso','progreso']})
        }catch(error){
            throw new HttpException("No se pudo conectar",HttpStatus.CONFLICT)
        }
    }

    async oneAlumnos(id: number)
    {
        try{
            return await this.dataSource.getRepository(alumnosEntity).findOne({where:{idAlumno:id},relations:['curso', 'progreso']})
        }catch(error){
            throw new HttpException("No se pudo encontrar el usuario", HttpStatus.CONFLICT)
        }
    }

    async agregarAlumno(newAlumno: alumnosDto){

        try{
            const baseAlumnos = await this.dataSource.getRepository(alumnosEntity).create(newAlumno)
            const cursoAlumno = await this.dataSource.getRepository(cursoEntity).findOne({where: {id_curso:newAlumno.idCurso}})
            const progresoAlumno = await this.dataSource.getRepository(progresoEntity).findOne({where:{id_progreso: newAlumno.idProgreso}})

            baseAlumnos.curso = cursoAlumno
            baseAlumnos.progreso = progresoAlumno

            return await this.dataSource.getRepository(alumnosEntity).save(baseAlumnos)
        }catch(error){
            throw new HttpException("No se pudo agregar un alumno",HttpStatus.CREATED)
        }
    }

    async aliminaAlumnos (id:number){
        try{
            const deleteAlumno = await this.dataSource.getRepository(alumnosEntity).findOne({where: {idAlumno:id}})
            return await this.dataSource.getRepository(alumnosEntity).delete(deleteAlumno)
        }catch(error){
            throw new HttpException("No se pudo eliminar el alumno",HttpStatus.CONFLICT)
        }
    }

    async actualizarAlumno(id:number, updatAlum:alumnosDto){
        try{
            const updateAlumno = await this.dataSource.getRepository(alumnosEntity).findOne({where:{idAlumno:id}})
            return await this.dataSource.getRepository(alumnosEntity).update(updateAlumno,updatAlum)
        }catch(error){
            throw new HttpException("No se pudo actualizar los alumnos", HttpStatus.CONFLICT)
        }
    }
}