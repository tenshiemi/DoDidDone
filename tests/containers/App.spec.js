import React from 'react';
import { App } from 'containers/App';
import { shallow } from 'enzyme';

describe('(Container) App', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
        children: []
    }
    _wrapper = shallow(<App { ..._props }/>);
  });

  it('Renders an app container', () => {
    const appContainer = _wrapper.find('div');
    expect(appContainer).to.exist;
  });
});
