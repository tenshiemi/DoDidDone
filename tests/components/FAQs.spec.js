import React from 'react';
import { FAQs } from 'components/FAQs';
import { shallow } from 'enzyme';

describe('(Component) FAQs', () => {
  let _wrapper;

  beforeEach(() => _wrapper = shallow(<FAQs/>));

  it('Renders an FAQ', () => {
    const faq = _wrapper.find('h2');
    expect(faq).to.exist;
    expect(faq.text()).to.match(/FAQs/);
  });
});
