# Angular Activity Document: Expense Tracker Mini Project

## Activity 1: Project Initialization
- **Goal:** Set up the foundational Angular workspace for the "ExpenseTracker" application.
- **Actions Taken:** 
  - Ran `npx @angular/cli@latest new expense-tracker --defaults --style=css --routing` to generate the new standalone Angular project with CSS and Routing enabled.
  - Initialized standard files (`package.json`, `angular.json`, `main.ts`, etc.).
- **Concepts Covered:** Angular CLI, Workspace structure.

## Activity 2: Component & Service Generation
- **Goal:** Scaffold the necessary modular components and state management services.
- **Actions Taken:** 
  - Ran `ng generate component components/dashboard`, `transaction-list`, `transaction-form`, and `navbar`.
  - Generated `TransactionService` to handle core logic.
- **Concepts Covered:** Components, Services, CLI Generators.

## Activity 3: Implementing State Management & Data Models
- **Goal:** Define the data structure and handle logic to save/retrieve transactions from `localStorage`.
- **Actions Taken:** 
  - Created `Transaction` interface in `transaction.model.ts`.
  - Implemented Angular Signals (`signal`, `computed`) in `TransactionService` for reactive state management.
  - Implemented `saveToStorage` and `loadFromStorage` to persist data.
- **Concepts Covered:** TypeScript Interfaces, Angular Services, Dependency Injection, Angular Signals.

## Activity 4: Routing Setup
- **Goal:** Configure navigation between Dashboard, Form, and List views.
- **Actions Taken:** 
  - Set up `Routes` in `app.routes.ts` connecting paths to components.
  - Modified `app.component` to hold the `<app-navbar>` and `<router-outlet>`.
- **Concepts Covered:** `RouterModule`, `Routes`, `<router-outlet>`, routing directives.

## Activity 5: Developing Transaction Form (Data Binding)
- **Goal:** Create an interactive form to add new incomes and expenses.
- **Actions Taken:** 
  - Implemented template-driven form using `FormsModule`.
  - Used Two-Way Data Binding (`[(ngModel)]`) to bind input fields to the component model.
  - Handled form submission via `(ngSubmit)`.
- **Concepts Covered:** Template-driven forms, Two-Way Data Binding (`[(ngModel)]`), Event Binding, Form Validation.

## Activity 6: Developing Transaction List & Dashboard
- **Goal:** Display the history of transactions and a summarized financial dashboard.
- **Actions Taken:** 
  - Used `@for` and `@if` modern Angular control flow blocks to list transactions and handle empty states.
  - Used Property Binding (`[class.is-expense]`, `[class.text-income]`) for dynamic UI coloring based on transaction type.
  - Rendered `currency` and `date` pipes for data formatting.
- **Concepts Covered:** Structural Directives (Control Flow blocks), Property Binding, Interpolation (`{{ }}`), Angular Pipes.

## Activity 7: Premium UI / UX Styling
- **Goal:** Implement a sleek, dark-mode first design with glassmorphism to fulfill rich aesthetic requirements.
- **Actions Taken:** 
  - Added global CSS variables for dark mode background (`#0f172a`), emerald green, and crimson red accents.
  - Built `.glass-card` utilities utilizing `backdrop-filter: blur()`.
  - Applied hover micro-animations to transaction cards and buttons.
- **Concepts Covered:** Global & Component CSS, Flexbox/Grid layouts, Glassmorphism design techniques.
