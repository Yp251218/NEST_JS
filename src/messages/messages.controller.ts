import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';


@Controller('messages')  // Here Controller is class decorator it is applied to class
export class MessagesController {
    @Get() //get is method decorator
    listMessages(){

    }

    @Post()
    createMessage(@Body () body: createMessageDto){ // body is argument decorator
        
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id:string) {
       console.log(id);
    }
}
