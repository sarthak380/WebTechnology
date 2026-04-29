import { Injectable, signal, computed } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private storageKey = 'expense_tracker_data';
  
  // Using Angular Signals for reactive state
  private transactionsSignal = signal<Transaction[]>(this.loadFromStorage());

  // Computed signals for summary
  readonly transactions = computed(() => this.transactionsSignal());
  
  readonly totalIncome = computed(() => 
    this.transactionsSignal()
      .filter(t => t.type === 'income')
      .reduce((acc, curr) => acc + curr.amount, 0)
  );

  readonly totalExpense = computed(() => 
    this.transactionsSignal()
      .filter(t => t.type === 'expense')
      .reduce((acc, curr) => acc + curr.amount, 0)
  );

  readonly balance = computed(() => this.totalIncome() - this.totalExpense());

  constructor() { }

  addTransaction(transaction: Omit<Transaction, 'id' | 'date'>) {
    const newTransaction: Transaction = {
      ...transaction,
      id: crypto.randomUUID(),
      date: new Date()
    };
    
    this.transactionsSignal.update(transactions => {
      const updated = [newTransaction, ...transactions];
      this.saveToStorage(updated);
      return updated;
    });
  }

  deleteTransaction(id: string) {
    this.transactionsSignal.update(transactions => {
      const updated = transactions.filter(t => t.id !== id);
      this.saveToStorage(updated);
      return updated;
    });
  }

  private loadFromStorage(): Transaction[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(transactions: Transaction[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(transactions));
  }
}
