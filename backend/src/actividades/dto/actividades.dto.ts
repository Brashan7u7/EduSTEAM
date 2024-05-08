import {column, Entity} from 'typeorm';

@Entity('actividades')
export class actividadesEntity{
    @PrimaryGeneratedColumn()
    idActividad: number;
}