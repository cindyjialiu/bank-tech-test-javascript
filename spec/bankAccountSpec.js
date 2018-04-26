describe('BankAccount', function() {

  var bankAccount;

  beforeEach(function(){
    account = new BankAccount
  });

  describe('deposit', function(){
    it('add deposit to the bank', function(){
      account.deposit(5)
      expect(account.balance).toEqual(5);
    });
  });


});
