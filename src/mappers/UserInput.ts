import { InputType, Field } from "type-graphql";


@InputType()
export class UserInput {

    @Field(() => String)
    firstName: string;

    @Field(() => String)
    lastName: string;

    @Field(() => String)
    password: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    phone: string;

    @Field(() => Boolean)
    isEmailUsername: boolean;

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