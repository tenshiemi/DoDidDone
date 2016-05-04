import React from 'react';
import TodoListContainer from 'containers/TodoListContainer';
import { shallow } from 'enzyme';

describe.skip('(Container) TodoListContainer', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
        todoItems: []
    }
    _wrapper = shallow(<TodoListContainer { ..._props }/>);
  });

  it('Renders a todo list container', () => {
    const todoListContainer = _wrapper.find('div');
    expect(todoListContainer).to.exist;
  });
});
