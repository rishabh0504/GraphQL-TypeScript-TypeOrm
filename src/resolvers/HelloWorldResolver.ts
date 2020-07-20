import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloWorldResolver {

  // A single query for graphql
  @Query(() => String) // This is single query
  hello() {     // hello is ur query
    return "hi!";  // This is response to the hellow query
  }
}
