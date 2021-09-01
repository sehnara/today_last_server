import { User } from '@prisma/client';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    user(id: number): Promise<User>;
    createUser(userData: {
        name: string;
        email: string;
        tel: string;
        position: string;
    }): Promise<User>;
    deleteUser(id: number): Promise<User>;
    updateUser(id: number, userData: {
        name: string;
        email: string;
        tel: string;
        position: string;
    }): Promise<User>;
}
