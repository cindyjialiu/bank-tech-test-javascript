function BankAccount() {
  this.balance = 0
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
}
