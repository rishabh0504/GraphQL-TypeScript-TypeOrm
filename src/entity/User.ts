import { Entity, PrimaryGeneratedColumn, OneToMany, Column, JoinTable, ManyToMany, BaseEntity } from "typeorm";
import { ObjectType, Int, Field } from "type-graphql";

import { Address } from "./Address";
import { Role } from "./Role";

@ObjectType()   // Map to object type to return same base entity. 
@Entity()
export class User extends BaseEntity {

    @Field(() => Int)   // Mapping vetween type-graphql and typeorm
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ nullable: true })
    firstName: string;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ nullable: true })
    lastName: string;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ nullable: false, select: false })
    password: string;

    @Field(() => Boolean) // Mapping vetween type-graphql and typeorm
    @Column({ default: false })
    status: boolean;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ unique: true, nullable: true })
    email: string;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ unique: true, nullable: true })
    phone: string;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ unique: true, nullable: false })
    username: string;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Field(() => String) // Mapping vetween type-graphql and typeorm
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;

    @OneToMany(type => Address, address => address.id) // note: we will create author property in the Photo class below
    address: Address[];

    @ManyToMany(type => Role, role => role.id)
    @JoinTable()
    roles: Role[];
}
