import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { UserInput } from "../mappers/UserInput";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import { ApolloError } from "apollo-server-express";
const saltRounds = process.env.SALT_ROUND || 10





@Resolver()
export class UserResolver {
  @Mutation(() => User)     // this argument in function defins th ereturn type of the mutation functions.
  async createUser(@Arg("options", () => UserInput) options: UserInput) {   // This argument is necessary to tell graphql that argument comming to this resollver is string type (not mandatory to define)
    //const username = options.isEmailUsername ? options.email : options.phone;
    //const user = await User.findOne({ where: { username } });
    //if (user) {
    //throw new UserExistError();
    //}
    const customUserDetails = JSON.parse(JSON.stringify(options))
    const hashPasswd = await bcrypt.hash(options.password, saltRounds);
    customUserDetails.username = options.isEmailUsername ? options.email : options.phone;
    customUserDetails.password = hashPasswd;
    customUserDetails.status = false;
    //const userExist = await User.findOne({ username: customUserDetails.username });
    try {
      const savedUser = User.create(customUserDetails);
      await savedUser.save();
      return savedUser;
    } catch (err) {
      console.log("err", err)
      throw new ApolloError("Username already exists", err.code, {})
    }

  }

  @Query(() => User)
  async findUserById(@Arg("id") id: number) {
    return await User.findOne({ id });
  }

  @Query(() => [User])
  async users() {
    return await User.find()
  }

}


/*

# findUserById Query
{
  findUserById(id: 2) {
    id
    username
    email
    phone
    firstName
    lastName
    status
    createdAt
    updatedAt
  }
}


#createUser
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
	){
   firstName
  }
}


*/