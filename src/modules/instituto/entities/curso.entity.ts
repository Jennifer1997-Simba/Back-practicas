import { create } from "domain";
import { title } from "process";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn ,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,

} from "typeorm";

@Entity('carrera',{schema: ''} )
export class ProductEntity{
    @PrimaryGeneratedColumn(
        @PrimaryGeneratedColumn(sv)
    )
    id:number;

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
@OneToMany(() => EstudianteEntity, (estudiante)=> estudiante.curso)
estudiante: EstudianteEntity;



@Column('varchar',{
    name:'nombre',
    comment: 'nombre del curso '
})
nombre:string;

@Column ('varchar',{
    name:'description',
    comment: 'descripcion del curso ',
})
description :string;

@Column('varchar',{
    name:'localizacion',
    nullable :true,
    comment:'Localizacion del curso'
})
localizacion:string;

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

}





