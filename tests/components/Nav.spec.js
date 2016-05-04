import React from 'react';
import { Nav } from 'components/Nav';
import { shallow } from 'enzyme';

describe('(Component) Nav', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<Nav/>);
  });

  it('Renders a navbar', () => {
    const navbar = _wrapper.find('AppBar');
    expect(navbar).to.exist;
  });
});
