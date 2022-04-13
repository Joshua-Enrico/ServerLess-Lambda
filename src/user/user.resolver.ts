import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create.user.dto';
import { User, UserCreate } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService) {}
    
    @Query(() => [User])
    async users() {
        return await this.userService.create2("hello");
    }

    @Query(() => User)
    async findUser(@Args('id') id: string) {

    }

    @Mutation(() => UserCreate)
    async createUser(@Args({ name: 'input', type: () => CreateUserDto}) data: CreateUserDto) {
        return await this.userService.create(data);
    }


}
