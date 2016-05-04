import React from 'react';
import { DropDownMenu } from 'components/DropDownMenu';
import { shallow } from 'enzyme';

describe('(Component) DropDownMenu', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<DropDownMenu/>);
  });

  it('Renders an FAQ', () => {
    const menu = _wrapper.find('Menu');
    expect(menu).to.exist;
  });
});
