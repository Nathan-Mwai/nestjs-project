import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';


@Controller('user')
export class UserController {
    // GET /user
    @Get()
    getUsers(@Query('name') name: string) {
        const users = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Emmy' },
            { id: 3, name: 'Timo' },
            { id: 4, name: 'Moe' },
        ];

        if (name) {
            return users.filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase()),
            );
        }
        return users;
    }
    //GET /user/:id
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return { id, name: 'John Doe' };
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return{
            data: CreateUserDto, message:'User Created Successfully'
        };
    }

    @Put(':id')
    updateUser(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto ) {
        return{
            data: {id, ...updateUserDto},
            message:'User Created Successfully'
        };
    }
}
