import React from 'react'
import { HelpTabs } from 'components/HelpTabs'
import { shallow } from 'enzyme'

describe('(Component) HelpTabs', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<HelpTabs/>)
  })

  it('Renders a help tab container', () => {
    const tabsContainer = _wrapper.find('Tabs')
    expect(tabsContainer).to.exist
  })
})
