describe('BankAccount', function() {

  var account;

  beforeEach(function(){
    account = new BankAccount()
    date = Date.now()
  });

  describe('deposit', function(){
    it('adds deposit to the bank', function(){
      expect(account.deposit(60, date)).toEqual(
        {
          date: date,
          amount: 60,
          balance: 60
    });
  });
});

  describe('withdrawal', function(){
    it('deducts the amount from the balance', function(){
      account.balance = 100
        expect(account.withdrawal(60, date)).toEqual(
          {
            date: date,
            amount: -60,
            balance: 40
      });
    });
  });

  describe('withdrawal', function(){
    it('raise an error if the balance is lower than the withdraw amount', function(){
      account.balance = 20
      expect(function(){account.withdrawal(50, date)}).toThrowError('Sorry, you balance is too low');
    });
  });


});
