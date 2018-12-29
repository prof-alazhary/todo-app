var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
require('sinon-mongoose');

var Todo = require('../models/Todo');
var TodoService = require('../services/TodoService');

describe("Get all todos", function(){
    let sandBox;
    before(()=>{
        sandBox = sinon.createSandbox();
    })
    // Test will pass if we get all todos
   it("should return all todos", function(done){
       sandBox.stub(Todo,)
       done()
   });

});
