import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Get()
    async users():Promise<User[]>{
        return this.userService.users();
    }

    @Get(":id")
    async user(@Param("id") id:number):Promise<User>{
        return this.userService.user({
           id : Number(id)
        })
    }

    @Post('create')
    async createUser(@Body() userData : {
        name : string; 
        email : string, 
        tel : string; 
        position : string
    }) : Promise<User>{
        const  {name, email, tel, position} = userData;
        return this.userService.createUser({
            name, email, tel, position
        })
    }

    @Delete(':id')
    async deleteUser(@Param("id") id:number) : Promise<User>{
        return this.userService.deleteUser({id:Number(id)})
    }

    @Put(':id')
    async updateUser(
        @Param("id") id:number, 
        @Body() userData : {
            name : string;
            email : string;
            tel : string;
            position : string;
        }) : Promise<User>{
            const {name, email, tel, position} = userData;
        return this.userService.updateUser({            
            where : {id : Number(id)},
            data : {name, email, tel, position}
        })
    }
}
