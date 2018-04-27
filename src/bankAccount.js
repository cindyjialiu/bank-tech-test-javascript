function BankAccount() {
  this.balance = 0
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
}
BankAccount.prototype.withdrawal = function (amount) {
  if(this.balance < amount)
    throw new Error('Sorry, you balance is too low');
  this.balance -= amount
}
