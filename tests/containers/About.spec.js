import React from 'react';
import { About } from 'containers/About';
import { shallow } from 'enzyme';

describe('(Container) About', () => {
  let _wrapper;

  beforeEach(() => _wrapper = shallow(<About/>));

  it('Renders an about header', () => {
    const header = _wrapper.find('h1');
    expect(header).to.exist;
    expect(header.text()).to.match(/About the Team/);
  });
});
