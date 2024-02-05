import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service'


@Controller('messages')  // Here Controller is class decorator it is applied to class
export class MessagesController {
    constructor(public messagesService: MessagesService) {}
        
    @Get() //get is method decorator
    listMessages(){
      return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body () body: createMessageDto){ // body is argument decorator
        
       return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string) {
        const message = await this.messagesService.findOne(id);

        if(!message){
            throw new NotFoundException('message not found');
        }

        return message;
       
    }
}
