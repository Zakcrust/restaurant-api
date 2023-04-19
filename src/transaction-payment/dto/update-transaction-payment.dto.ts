import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionPaymentDto } from './create-transaction-payment.dto';

export class UpdateTransactionPaymentDto extends PartialType(CreateTransactionPaymentDto) {}
