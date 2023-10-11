// Problem: Create a Class for a Bank Account

// Create a JavaScript class representing a simple bank account. The class should have the following methods:

// Constructor: Initialize the account with an owner's name and an initial balance.
// Deposit: Accept a deposit and update the account balance.
// Withdraw: Accept a withdrawal amount and update the account balance. Make sure to check if the withdrawal amount is not greater than the current balance.
// Check Balance: Return the current balance of the account.
// Here's a template to get you started:
class BankAccount {
  // Constructor
  constructor(owner, initialBalance) {
    this._owner = owner;
    this._initialBalance = initialBalance;
  }

  get owner() {
    return this._owner;
  }
  get initialBalance() {
    return this._initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    // Your code here
  }

  // Method to withdraw money
  withdraw(amount) {
    // Your code here
  }

  // Method to check balance
  checkBalance() {
    // Your code here
  }
}

// Example usage:
const account = new BankAccount("John Doe", 1000);
console.log(account.checkBalance()); // Should print 1000
account.deposit(500);
console.log(account.checkBalance()); // Should print 1500
account.withdraw(200);
console.log(account.checkBalance()); // Should print 1300
account.withdraw(1500); // Should print an error message since the withdrawal amount is greater than the balance