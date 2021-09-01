import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {Prisma, User} from "@prisma/client";

@Injectable()
export class UserService {

    constructor(private prisma : PrismaService){}

   async users(): Promise<User[]|null>{
    return this.prisma.user.findMany();
   }

   async user(id : Prisma.UserWhereUniqueInput) : Promise<User>{
       return this.prisma.user.findUnique({
           where : id
       });
   }

   async createUser(data : Prisma.UserCreateInput) : Promise<User>{
       return this.prisma.user.create({
           data
       })
   }

   async deleteUser(id : Prisma.UserWhereUniqueInput) : Promise<User>{
    return this.prisma.user.delete({
        where : id
    })
   }
   
   async updateUser(params: {
       where : Prisma.UserWhereUniqueInput;
       data : Prisma.UserUpdateInput;
   }):Promise<User>{
       const {data, where} = params;
       return this.prisma.user.update({
        data, where
       })
   }
}
