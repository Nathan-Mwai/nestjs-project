import { Body, Controller, Get, Param, Post, Put, Query,Delete, ParseIntPipe } from '@nestjs/common';
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
    getUserById(@Param('id', ParseIntPipe) id: number):unknown {
        return this.userService.findOneUser(id)
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto):unknown {
        return this.userService.createUser(createUserDto)
    }

    @Put(':id')
    updateUser(@Param('id', ParseIntPipe) id:number, @Body() updateUserDto:UpdateUserDto ) :unknown {
        return this.userService.updateUser(id,updateUserDto)
        
    }

    @Delete(':id')
    deleteUserById(@Param('id', ParseIntPipe) id: number):unknown {
        return this.userService.deleteUser(id)
    }
}
