import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    constructor() {}

    async create(user: any) {
        return user;
    }

    async create2(user: any) {
        return user;
    }


}
