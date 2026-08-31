import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger.js';

interface User {
    id:number,
    name:string,
    email: string
}

@Injectable()
export class UserService {
    constructor(private readonly logger:LoggerService){}
    private users: User[] =[
        {id: 1, name: "John Doe", email: "john@example.com"},
        {id: 2, name: "Jane Doe", email: "jane@example.com"},
    ];

    findAllUsers(name:string=''){
        this.logger.log(`Getting all users...`)
        return this.users.filter((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
        )
    }
}
