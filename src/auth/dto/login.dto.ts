import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail({}, {message:'Invalid email'})
    @IsString()
    email:string;

    @MinLength(3,{message:'Password must be at least $constraint1 characters'})
    password:string;
}