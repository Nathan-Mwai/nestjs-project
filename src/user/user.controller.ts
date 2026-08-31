import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    // GET /user
    @Get()
    getUsers(@Query('name') name: string):unknown {
        return this.userService.findAllUsers(name);
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
