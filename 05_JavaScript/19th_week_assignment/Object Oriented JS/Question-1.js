// <!-- Question-1 :-  Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

// Class for BankAccount: =>>>
class BankAccount {
  constructor(initialDeposit, holderName) {
    if (initialDeposit > 0) {
      this.balance = initialDeposit;
    } else {
      this.balance = 0;
    }
    this.holderName = holderName;
  }

  // For depositing money: =>>>
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return {
        message: `Deposited Rs.${amount}. New balance: Rs.${this.balance}`,
        success: true,
      };
    } else {
      return {
        message: "Invalid deposit amount. Please enter a positive amount.",
        success: false,
      };
    }
  }

  // For withdrawing money: =>>>
  withdraw(amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        return {
          message: `Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`,
          success: true,
        };
      } else {
        return {
          message: "Insufficient funds for withdrawal.",
          success: false,
        };
      }
    } else {
      return {
        message: "Invalid withdrawal amount. Please enter a positive amount",
        success: false,
      };
    }
  }

  // For displaying account balance: =>>>
  checkBalance() {
    if (this.balance > 0) {
      return `Account balance for ${this.holderName} : is Rs.${this.balance}`;
    } else {
      return "Account balance is zero.";
    }
  }
}

// Test-Case: =>>>
let accountHolder = new BankAccount(1000, "Ashwani");
console.log(accountHolder.checkBalance());

console.log(accountHolder.deposit(500));
console.log(accountHolder.deposit(-50));

console.log(accountHolder.withdraw(200));
console.log(accountHolder.withdraw(1500));
console.log(accountHolder.withdraw(-500));

console.log(accountHolder.checkBalance());

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
