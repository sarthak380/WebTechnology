import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.css',
})
export class TransactionForm {
  transactionService = inject(TransactionService);
  router = inject(Router);

  model: Partial<Transaction> = {
    title: '',
    amount: null as unknown as number,
    type: 'expense'
  };

  onSubmit() {
    if (this.model.title && this.model.amount) {
      this.transactionService.addTransaction({
        title: this.model.title,
        amount: this.model.amount,
        type: this.model.type as 'income' | 'expense'
      });
      this.router.navigate(['/']);
    }
  }
}
