import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Address } from "../entity/Address";
import { AddressInput } from "../mappers/AddressInput";
import { ApolloError } from "apollo-server-express";




@Resolver()
export class AddressResolver {

  @Query(() => [Address])
  async address(@Arg("id") id: number) {
    try {
      const addresses = await Address.find({
        relations: ['user'],
        where: {
          user: {
            id
          }
        }
      })
      return addresses
    } catch (err) {
      console.error(err);
      throw new ApolloError("Someting went wrong...!!!")
    }
  }

  @Mutation(() => Address)     // this argument in function defins th ereturn type of the mutation functions.
  async createAddress(@Arg("options", () => AddressInput) options: AddressInput) {   // This argument is necessary to tell graphql that argument comming to this resollver is string type (not mandatory to define)
    const customAddress = JSON.parse(JSON.stringify(options));
    customAddress.user = customAddress.userId;
    delete customAddress.userId;
    const addressObject = Address.create(customAddress);
    try {
      await addressObject.save()
      return addressObject;
    } catch (err) {
      throw new ApolloError("Something Went wrong")
    }
  }
}

/*


@Query(() => [Address])
  async address(@Arg("id") id: number) {
    try {
      const addresses = await Address.find({
        relations: ['user'],
        where: {
          user: {
            id
          }
        }
      });
      return addresses
    } catch (err) {
      throw new ApolloError("Someting went wrong...!!!")
    }
  }

  */