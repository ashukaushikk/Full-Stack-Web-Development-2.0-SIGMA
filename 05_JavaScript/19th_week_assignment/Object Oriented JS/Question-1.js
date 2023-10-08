// <!-- Question-1 :-  Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

// Class for BankAccount: =>>>
class BankAccount {
  constructor(initialDeposit, holderName) {
    if (initialDeposit > 0) this.balance = initialDeposit;
    this.holderName = holderName;
  }

  // For depositing money: =>>>
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited Rs.${amount}. New balance : Rs.${this.balance}`);
    } else {
      console.log(`Invalid deposit amount. Please enter a positive amount.`);
    }
  }

  // For withdrawing money: =>>>
  withdraw(amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn Rs.${amount}. New balance : Rs.${this.balance}`);
      } else {
        console.log(`Insufficient funds for withdrawal.`);
      }
    } else {
      console.log(`Invalid withdrawal amount. Please enter a positive amount`);
    }
  }

  // For displaying account balance: =>>>
  checkBalance() {
    if (this.balance > 0) {
      console.log(
        `Account balance for ${this.holderName}: is Rs.${this.balance}`
      );
    }
  }
}

// Test-Case: =>>>
let accountHolder = new BankAccount(1000, "Ashwani");
accountHolder.checkBalance();

accountHolder.deposit(500);
accountHolder.deposit(-50);

accountHolder.withdraw(200);
accountHolder.withdraw(1500);
accountHolder.withdraw(-500);

accountHolder.checkBalance();

// When we run this function, we will have the following information printed/output : >>>

// ***********************************************************//
//                                                            //
// Account balance for Ashwani: is Rs.1000                    //
// Deposited Rs.500. New balance : Rs.1500                    //
// Invalid deposit amount. Please enter a positive amount.    //
// Withdrawn Rs.200. New balance : Rs.1300                    //
// Insufficient funds for withdrawal.                         //
// Invalid withdrawal amount. Please enter a positive amount  //
// Account balance for Ashwani: is Rs.1300                    //
//                                                            //
// ***********************************************************//
