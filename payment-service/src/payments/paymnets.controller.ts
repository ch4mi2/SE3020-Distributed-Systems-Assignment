import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { PaymentsService } from './paymnets.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';

@Controller('payments')
export class PaymentsController {
    constructor (private readonly paymentsService: PaymentsService) {}

    @Post()
    create(@Body() createPaymentDto: CreatePaymentDto){
        return this.paymentsService.create(createPaymentDto);
    }

    @Get()
    findAll(){
        return this.paymentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.paymentsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdatePaymentDto: UpdatePaymentDto){
        return this.paymentsService.update(id, UpdatePaymentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.paymentsService.remove(id);
    }


}
