global.Promise = require('bluebird');

const sinon = require('sinon'),
    chai = require('chai'),
    assert = require('assert'),
    { expect } = chai.expect,
    should = chai.should();

const Todo = require('../models/Todo'),
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

    // some another example..
    function once(fn) {
        var returnValue, called = false;
        return function () {
            if (!called) {
                called = true;
                returnValue = fn.apply(this, arguments);
            }
            return returnValue;
        };
    }

    it('calls the original function', function () {
        var callback = sinon.fake();
        var proxy = once(callback);
    
        proxy();
    
        assert(callback.called);
    });
    

});