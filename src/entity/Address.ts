import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, JoinColumn } from "typeorm";
import { User } from "./User";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Address extends BaseEntity {

  @Field(() => Int)   // Mapping vetween type-graphql and typeorm
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: true })
  addressLine1: string;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: true })
  addressLine2: string;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: false })
  country: string;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: false })
  province: string;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: false })
  city: string;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ nullable: false })
  zipcode: number;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: string;

  @Field(() => String) // Mapping vetween type-graphql and typeorm
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: string;

  @ManyToOne(type => User, user => user.id, {
    eager: true
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
