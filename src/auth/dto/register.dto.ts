import { IsEmail , IsNotEmpty, IsString, MinLength } from 'class-validator';
export class RegisterDto {
    @IsString({message:'Name must be a string'})
    @IsNotEmpty({message:'Name is required'})
    @MinLength(3,{message:'Name must be at least $constraint1 characters'})
    name:string;

    @IsEmail({}, {message:'Invalid email'})
    @IsNotEmpty({message:'Email is required'})
    email:string;

    @IsNotEmpty({message:'Password is required'})
    @MinLength(3,{message:'Password must be at least $constraint1 characters'})
    password:string;
}
