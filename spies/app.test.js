const expect=require('expect');
const rewire=require('rewire');

var app=rewire('./app');

describe('App',()=>{
  var db={
    saveUser:expect.createSpy()
  };
  app.__set__('db',db);
  it('call spy correctly',()=>{
    var spy=expect.createSpy();
    spy('gaurav',23);
    expect(spy).toHaveBeenCalledWith('gaurav',23);
  });

  it('call save user',()=>{
    var email="gmn@gmn.com";
    var password="123";

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,password
    });
  });
});
