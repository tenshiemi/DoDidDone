import React from 'react';
import { TodoItem } from 'components/TodoItem';
import { shallow } from 'enzyme';

describe('(Component) TodoItem', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
      todoItem: {},
      index: 0,
      dispatch: function(){}
    }
    _wrapper = shallow(<TodoItem { ..._props }/>);
  });

  it('Renders a todo item', () => {
    const item = _wrapper.find('li');
    expect(item).to.exist;
  });
});
