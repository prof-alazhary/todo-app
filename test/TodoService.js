var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
require('sinon-mongoose');

var Todo = require('../models/Todo');

describe("Get all todos", function(){
    // Test will pass if we get all todos
   it("should return all todos", function(done){
       var TodoMock = sinon.mock(Todo);
   });

});
