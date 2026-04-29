import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { TransactionList } from './components/transaction-list/transaction-list';
import { TransactionForm } from './components/transaction-form/transaction-form';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'list', component: TransactionList },
  { path: 'add', component: TransactionForm },
  { path: '**', redirectTo: '' }
];
