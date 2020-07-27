import { InputType, Field, Int } from "type-graphql";


@InputType()
export class AddressInput {

  @Field(() => String, { nullable: true })
  addressLine1: string;

  @Field(() => String, { nullable: true })
  addressLine2: string;

  @Field(() => String, { nullable: false })
  country: string;

  @Field(() => String, { nullable: false })
  province: string;

  @Field(() => String, { nullable: false })
  city: string;

  @Field(() => String, { nullable: false })
  zipcode: string;

  @Field(() => Int, { nullable: false })
  userId: string;
}

/*

# Write your query or mutation here
mutation{
  createUser(
		options: {
      firstName:"Rishabh",
      lastName :"Tiwari",
      password:"rishabh@0504",
      email:"rishabh.tiwari0504@gmail.com",
      phone:"+971 567784757",
      isEmailUsername : true
    }
	)
}*/