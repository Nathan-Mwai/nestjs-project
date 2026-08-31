import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

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

    findOneUser(id:number){
        this.logger.log(`Getting user with id ${id}`)
        return this.users.find((user)=>user.id===Number(id));
    }

    createUser(dto:CreateUserDto){
        this.logger.log('Creating a new User...')
        return {
            data: dto,
            message:'User Created Successfully'
        }
    }

    updateUser(id:number, dto:UpdateUserDto){
        this.logger.log('Updating User...')
        return {
             data: {id, ...dto},
            message:'User Updated Successfully'
        }
    }

    deleteUser(id:number){
        this.logger.log(`Deleting user with id ${id}`)
        return this.users.find((user)=>user.id===Number(id));
    }
}
