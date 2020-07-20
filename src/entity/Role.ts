import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()   // Map to object type to return same base entity. 
@Entity()
export class Role extends BaseEntity {    //BaseEntity will provide you the basic crud methods
  @Field(() => Int)   // Mapping vetween type-graphql and typeorm
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column()
  roleName: string;
}
