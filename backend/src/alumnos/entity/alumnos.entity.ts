import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('alumnos')
export class alumnosEntity{
    @PrimaryGeneratedColumn()
    idAlumno: number;

    @Column({type: 'varchar',length:30})
    nombre:string;

    @Column({type: 'varchar',length:30})
    paterno:string;

    @Column({type: 'varchar',length:30})
    materno:string;

    @Column({type: 'varchar',length:30})
    correo:string;

    @Column({type: 'varchar',length:30})
    constrasena:string;

    @Column({type: 'date',length:30})
    fechReg:Date;

    @ManyToOne(()=>cursoEntity, (cur) => cur.alumnos,{nullable:true})
    curso:cursoEntity

    @OneToOne(()=>progresoEntity, (pro) => pro.alumnos.{nullable:true})
    progreso:progresoEntity
}