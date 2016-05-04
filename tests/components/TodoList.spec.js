import React from 'react';
import { TodoList } from 'components/TodoList';
import { shallow } from 'enzyme';

describe('(Component) TodoList', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
      todoItems: []
    }
    _wrapper = shallow(<TodoList { ..._props }/>);
  });

  it('Renders a todo list', () => {
    const list = _wrapper.find('ul');
    expect(list).to.exist;
  });
});
