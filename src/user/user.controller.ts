import { Body, Controller, Get, Param, Post, Put, Query,Delete } from '@nestjs/common';
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
    getUserById(@Param('id') id: number):unknown {
        return this.userService.findOneUser(id)
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Put(':id')
    updateUser(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto ) {
        return this.userService.updateUser(Number(id),updateUserDto)
        
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: number):unknown {
        return this.userService.deleteUser(id)
    }
}
