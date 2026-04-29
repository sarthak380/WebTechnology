import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  transactionService = inject(TransactionService);

  get balance() { return this.transactionService.balance(); }
  get income() { return this.transactionService.totalIncome(); }
  get expense() { return this.transactionService.totalExpense(); }
  get recentTransactions() { return this.transactionService.transactions().slice(0, 3); }
}
