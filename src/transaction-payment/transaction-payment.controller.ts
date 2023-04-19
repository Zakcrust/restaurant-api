import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionPaymentService } from './transaction-payment.service';
import { CreateTransactionPaymentDto } from './dto/create-transaction-payment.dto';
import { UpdateTransactionPaymentDto } from './dto/update-transaction-payment.dto';

@Controller('transaction-payment')
export class TransactionPaymentController {
  constructor(private readonly transactionPaymentService: TransactionPaymentService) {}

  @Post()
  create(@Body() createTransactionPaymentDto: CreateTransactionPaymentDto) {
    return this.transactionPaymentService.create(createTransactionPaymentDto);
  }

  @Get()
  findAll() {
    return this.transactionPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionPaymentDto: UpdateTransactionPaymentDto) {
    return this.transactionPaymentService.update(+id, updateTransactionPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionPaymentService.remove(+id);
  }
}
