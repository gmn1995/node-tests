const expect=require('expect');
const utils=require('./utils');

describe("utils",()=>{

  describe('#add',()=>{
    it ('add two nums',()=>{
      var res=utils.add(33,11);

      expect(res).toBeA('number').toBe(44);
    });

    it ('async add two nums',(done)=>{
      utils.asAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

 describe('#square',()=>{
   it('square',()=>{
     var sq=utils.square(7);
     expect(sq).toBe(49).toBeA('number');
   });

   it('async square number',(done)=>{
     utils.asSquare(7,(sq)=>{
       expect(sq).toBe(49).toBeA('number');
       done();
     });
   });

 })

});

it('verify first last names',()=>{
  var user={
    age:23,
    location:'Charlotte'
  };
  var user=utils.setName(user,"gaurav nadkar");
  expect(user).toInclude({
    firstName:"gaurav",
    lastName:"nadkar"
  });
});
// it('expect some value',()=>{
//   //expect(12).toNotBe(11);
//   //expect({name:"gaurav"}).toEqual({name:"gaurav"});
//   //expect([2,3,4]).toInclude(3);
//   expect({
//     name:'gaurav',
//     age:23,
//     location:'Charlotte'
//   }).toExclude({
//     age:523
//   })
// });
