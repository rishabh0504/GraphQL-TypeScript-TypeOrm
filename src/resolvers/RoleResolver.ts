import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Role } from "../entity/Role";


@Resolver()
export class RoleResolver {

  @Mutation(() => Boolean)     // this argument in function defins th ereturn type of the mutation functions.
  async createRole(@Arg("roleName") roleName: string) {   // This argument is necessary to tell graphql that argument comming to this resollver is stri8ng type (not mandatory to define)
    await Role.insert({ roleName })
    return true;
  }

  @Query(() => [Role])
  async roles() {
    try {
      const response = await Role.find()
      return await response
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
