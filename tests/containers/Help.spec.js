import React from 'react';
import { Help } from 'containers/Help';
import { shallow } from 'enzyme';

describe('(Container) Help', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
        children: []
    }
    _wrapper = shallow(<Help { ..._props }/>);
  });

  it('Renders a help container', () => {
    const helpContainer = _wrapper.find('div');
    expect(helpContainer).to.exist;
  });
});
