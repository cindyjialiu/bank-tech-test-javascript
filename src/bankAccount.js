
function BankAccount() {
  this.balance = 0
}

BankAccount.prototype.deposit = function (amount, date) {
  return { date: date, amount: amount, balance: this.balance += amount }
}
BankAccount.prototype.withdrawal = function (amount, date) {
  if(this.balance < amount)
    throw new Error('Sorry, you balance is too low');
  return { date: date, amount: -amount, balance: this.balance -= amount }
}
