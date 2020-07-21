import { Resolver, Mutation, Query, Arg } from "type-graphql";
import { Role } from "../entity/Role";
import { RoleInput } from "../mappers/RoleInput";




@Resolver()
export class RoleResolver {

  @Mutation(() => Boolean)     // this argument in function defins th ereturn type of the mutation functions.
  async createRole(@Arg("options", () => RoleInput) options: RoleInput) {   // This argument is necessary to tell graphql that argument comming to this resollver is stri8ng type (not mandatory to define)
    await Role.insert(options)
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

  @Mutation(() => Boolean)
  async delete(@Arg("id") id: number) {
    await Role.delete({ id })
    return true;
  }

  @Mutation(() => Boolean)
  async update(@Arg("id") id: number, @Arg("input", () => RoleInput) input: RoleInput) {
    await Role.update({ id }, input)
    return true;
  }
}
