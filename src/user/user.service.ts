
import { Injectable } from "@nestjs/common";
import { CONSTANTS } from "src/constant";
import { User } from "./user.entity";

export class UserService {
    public users: User[] = [
        {
            username: "irshad",
            password: "admin",
            email: "user1@gmail.com",
            age: 22,
            role:CONSTANTS.ROLES.SOFTWARE_DEVELOPER


        }, {
            username: "vishnu",
            password: "admin",
            email: "user2@gmail.com",
            age: 23,
            role:CONSTANTS.ROLES.WEB_DEVELOPER


        },
        {
            username: "navin",
            password: "admin",
            email: "user3@gmail.com",
            age: 24, 
            role:CONSTANTS.ROLES.SOFTWARE_DEVELOPER
        }

    ];

    getUserByUserName(userName:string):User{
        return this.users.find((user:User)=>user.username===userName)
    }
}