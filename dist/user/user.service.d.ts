import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from "@prisma/client";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    users(): Promise<User[] | null>;
    user(id: Prisma.UserWhereUniqueInput): Promise<User>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    deleteUser(id: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
}
