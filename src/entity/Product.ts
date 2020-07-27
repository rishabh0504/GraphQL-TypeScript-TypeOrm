import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Product extends BaseEntity {

  @Field(() => Int)   // Mapping vetween type-graphql and typeorm
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: false })
  name: string;

  @Field(() => [String]) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: true })
  description: string;

  @Field(() => Int) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: false })
  prize: number;



}
