import React from 'react';
import { ContactTab } from 'components/ContactTab';
import { shallow } from 'enzyme';

describe('(Component) ContactTab', () => {
  let _wrapper;

  beforeEach(() => _wrapper = shallow(<ContactTab/>));

  it('Renders a contact tab', () => {
    const tab = _wrapper.find('h2');
    expect(tab).to.exist;
    expect(tab.text()).to.match(/Contact/);
  });
});
