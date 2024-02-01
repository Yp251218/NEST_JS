import { IsString, isString } from 'class-validator';

export class createMessageDto{
    @IsString()   // Decorator 3 strp
    content: string; //2 step
}