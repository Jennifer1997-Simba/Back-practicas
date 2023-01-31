import { create } from "domain";
import { title } from "process";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn ,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,

} from "typeorm";

@Entity('alumno',{schema: ''} 
export class CategoryEntity{
    @PrimaryGeneratedColumn(
        @PrimaryGeneratedColumn(sv)
    )
    id:number;
}

@CreateDateColumn({
    name:'created_date',
    type: 'timestamptz' ,
    default:() =>'CURRENT_TIMESTAP'

})
createdAt:Date;

@UpdateDateColumn({
    name:'updated_date',
    type: 'timestamptz' ,
    default:() =>'CURRENT_TIMESTAP'

})
updatedAt: Date;


@DeleteDateColumn({

    name:'deleted_date',
    type: 'timestamptz' ,
    nullable :true,
})
deletedAt:Date;




//RelationShip
@ManyToOne(() => CursoEntity, (curso)=> curso.estudiante)
curso: CursoEntity;



@Column('varchar',{
name:'nombre',
comment: 'nombre del estudiante'
})
nombre:string;

@Column ('integer',{
name:'cedula',
unique:true,
comment: 'cedula del estudiante ',
})
cedula :number;

@Column('varchar',{
name:'description',
comment:'Descripcion del estudiante'
})
description:string;

/*@Column('boolean',{
name:'estate',

})
state:boolean;*/
/*@Column('enum',{
name:'language',
enum:languageTypeEnum,

})
language:LanguageTypeEnum;*/


//Completar 
@BeforeInsert()
@BeforeUpdate()

async setTitle(){
if(!this.title){
return;
}
this.title = this.title.toUpperCase();
}
/*setEmail(){
return;
}
this.email = this.email.toLowerCase().trim();

async hashPassword(){

if(!this.password){
return;
}
this.password = await Bcrypt.hash();
}*/










