const request=require('supertest');
const expect=require('expect');


var app=require('./server').app;

describe('Server',()=>{

  describe('/',()=>{
    it('should return hello',(done)=>{
      request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
          expect(res.body).toInclude({
            error: "Page not Found"
          });
        })
        .end(done);
    });
  });

  describe('/users',()=>{


    it('check users',(done)=>{
      request(app)
      .get('/users')
      .expect(200)
      .expect((res)=>{
        expect(res.body).toInclude(

          {
            name:"gmn",
          age:1995
        })
      })
      .end(done);
    });
  });

});
