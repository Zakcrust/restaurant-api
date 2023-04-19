import { Module } from '@nestjs/common';
import { TransactionPaymentService } from './transaction-payment.service';
import { TransactionPaymentController } from './transaction-payment.controller';

@Module({
  controllers: [TransactionPaymentController],
  providers: [TransactionPaymentService]
})
export class TransactionPaymentModule {}
