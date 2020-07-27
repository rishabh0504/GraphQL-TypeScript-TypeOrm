import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()   // Map to object type to return same base entity. 
@Entity()
export class Role extends BaseEntity {    //BaseEntity will provide you the basic crud methods
  @Field(() => Int)   // Mapping vetween type-graphql and typeorm
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column()
  roleName: string;

  @Field(() => String)
  @Column({ type: "timestamp" })
  createdAt: string;

  @Field(() => String)
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: string;

  @ManyToMany(type => User, user => user.username)
  user: User[];

}
