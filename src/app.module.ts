import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { StaffRoleModule } from './staff-role/staff-role.module';
import { StaffTypeModule } from './staff-type/staff-type.module';
import { AbsenceModule } from './absence/absence.module';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionDetailModule } from './transaction-detail/transaction-detail.module';
import { TransactionPaymentModule } from './transaction-payment/transaction-payment.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { MenuModule } from './menu/menu.module';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff/entities/staff.entity';
import { Absence } from './absence/entities/absence.entity';
import { StaffRole } from './staff-role/entities/staff-role.entity';
import { StaffType } from './staff-type/entities/staff-type.entity';
import { TransactionDetail } from './transaction-detail/entities/transaction-detail.entity';
import { TransactionPayment } from './transaction-payment/entities/transaction-payment.entity';
import { PaymentMethod } from './payment-method/entities/payment-method.entity';
import { Menu } from './menu/entities/menu.entity';
import { Member } from './member/entities/member.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'uIhNPix_tB^J0=1XiLG4B+5wLBP,33GH',
      database: 'restaurant_dev',
      entities: [Staff, StaffRole, StaffType],
      synchronize: false,
    }),
    StaffModule, StaffRoleModule, StaffTypeModule, AbsenceModule, TransactionModule, TransactionDetailModule, TransactionPaymentModule, PaymentMethodModule, MenuModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
