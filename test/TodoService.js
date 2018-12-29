global.Promise = require('bluebird');

require('sinon-mongoose');
var sinon = require('sinon'),
    chai = require('chai'),
    { expect } = chai.expect,
    should = chai.should();

var Todo = require('../models/Todo'),
    TodoService = require('../services/TodoService'),
    { todo, todos } = require('./factories/Todo');


describe("Get all todos", function () {
    let sandBox;
    before(() => {
        sandBox = sinon.createSandbox();
    })

    it("should return all todos that related with user", function (done) {
        const userId = '1234';
        sandBox.stub(Todo, 'find').returns(todos);
        const _todos = TodoService.select(userId);

        _todos.should.be.an('array').that.be.deep.equal(todos);
        Todo.find.restore();
        done();
    });

});