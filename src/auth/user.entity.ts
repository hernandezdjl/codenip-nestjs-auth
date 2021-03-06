import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({length:20})
    name:string

    @Column({length:100})
    email:string

    @Column({length:100})
    password:string

    @Column({type:'bool',default:false})
    active:boolean

    @CreateDateColumn()
    createdOn:Date
}