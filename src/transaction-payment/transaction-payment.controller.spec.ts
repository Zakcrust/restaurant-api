import { Test, TestingModule } from '@nestjs/testing';
import { TransactionPaymentController } from './transaction-payment.controller';
import { TransactionPaymentService } from './transaction-payment.service';

describe('TransactionPaymentController', () => {
  let controller: TransactionPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionPaymentController],
      providers: [TransactionPaymentService],
    }).compile();

    controller = module.get<TransactionPaymentController>(TransactionPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
