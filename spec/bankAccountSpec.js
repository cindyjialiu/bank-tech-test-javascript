describe('BankAccount', function() {

  var account;

  beforeEach(function(){
    account = new BankAccount()
  });

  describe('deposit', function(){
    it('adds deposit to the bank', function(){
      account.deposit(60)
      expect(account.balance).toEqual(60);
    });
  });

  describe('withdrawal', function(){
    it('deducts the amount from the balance', function(){
      account.balance = 100
      account.withdrawal(60)
      expect(account.balance).toEqual(40)
    })
  })

  describe('withdrawal', function(){
    it('raise an error if the balance is lower than the withdraw amount', function(){
      account.balance = 20
      expect(function(){account.withdrawal(50)}).toThrowError('Sorry, you balance is too low');
    })
  })


});
